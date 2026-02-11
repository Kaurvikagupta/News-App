import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert, Badge } from 'react-bootstrap';
import NavBar from './components/NavBar';
import NewsTicker from './components/NewsTicker';
import CategoryFilter from './components/CategoryFilter';
import NewsCard from './components/NewsCard';
import { mockArticles } from './mockData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [activeView, setActiveView] = useState('home'); // home, trending, saved
  const [savedArticles, setSavedArticles] = useState([]);

  // NewsAPI key - Uses Vite environment variables for security
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY || 'YOUR_API_KEY_HERE';
  const BASE_URL = 'https://newsapi.org/v2';
  const USE_DEMO_MODE = API_KEY === 'YOUR_API_KEY_HERE' || !API_KEY;

  // Load saved articles from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('newsHub_savedArticles');
    if (saved) {
      setSavedArticles(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (activeView === 'home') {
      fetchNews();
    } else if (activeView === 'trending') {
      fetchTrendingNews();
    } else if (activeView === 'saved') {
      displaySavedArticles();
    }
  }, [category, activeView]);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    setIsSearching(false);

    // Use demo mode if no valid API key
    if (USE_DEMO_MODE) {
      setTimeout(() => {
        setArticles(mockArticles[category] || mockArticles.general);
        setIsDemoMode(true);
        setLoading(false);
      }, 800); // Simulate loading delay
      return;
    }

    try {
      const endpoint = `${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
      const response = await fetch(endpoint);
      const data = await response.json();

      if (data.status === 'ok') {
        setArticles(data.articles || []);
        setIsDemoMode(false);
      } else {
        // Fallback to demo mode on API error
        setArticles(mockArticles[category] || mockArticles.general);
        setIsDemoMode(true);
        setError('Using demo mode. Add your API key to get live news.');
      }
    } catch (err) {
      // Fallback to demo mode on network error
      setArticles(mockArticles[category] || mockArticles.general);
      setIsDemoMode(true);
      setError('Using demo mode. Add your API key to get live news.');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchTrendingNews = async () => {
    setLoading(true);
    setError(null);
    setIsSearching(false);

    // Use demo mode if no valid API key
    if (USE_DEMO_MODE) {
      setTimeout(() => {
        // Get trending articles from all categories
        const trending = [
          ...mockArticles.trending || [],
          ...mockArticles.technology.slice(0, 2),
          ...mockArticles.business.slice(0, 2),
          ...mockArticles.general.slice(0, 2)
        ];
        setArticles(trending);
        setIsDemoMode(true);
        setLoading(false);
      }, 800);
      return;
    }

    try {
      const endpoint = `${BASE_URL}/top-headlines?country=us&sortBy=popularity&apiKey=${API_KEY}`;
      const response = await fetch(endpoint);
      const data = await response.json();

      if (data.status === 'ok') {
        setArticles(data.articles || []);
        setIsDemoMode(false);
      } else {
        const trending = [
          ...mockArticles.technology.slice(0, 2),
          ...mockArticles.business.slice(0, 2),
          ...mockArticles.general.slice(0, 2)
        ];
        setArticles(trending);
        setIsDemoMode(true);
        setError('Using demo mode. Add your API key to get live news.');
      }
    } catch (err) {
      const trending = [
        ...mockArticles.technology.slice(0, 2),
        ...mockArticles.business.slice(0, 2),
        ...mockArticles.general.slice(0, 2)
      ];
      setArticles(trending);
      setIsDemoMode(true);
      setError('Using demo mode. Add your API key to get live news.');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const displaySavedArticles = () => {
    setLoading(true);
    setTimeout(() => {
      setArticles(savedArticles);
      setLoading(false);
    }, 300);
  };

  const handleSaveArticle = (article) => {
    const isAlreadySaved = savedArticles.some(saved => saved.url === article.url);

    let updatedSaved;
    if (isAlreadySaved) {
      // Remove from saved
      updatedSaved = savedArticles.filter(saved => saved.url !== article.url);
    } else {
      // Add to saved
      updatedSaved = [...savedArticles, article];
    }

    setSavedArticles(updatedSaved);
    localStorage.setItem('newsHub_savedArticles', JSON.stringify(updatedSaved));
    return !isAlreadySaved; // Return true if saved, false if unsaved
  };

  const isArticleSaved = (article) => {
    return savedArticles.some(saved => saved.url === article.url);
  };

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    setIsSearching(true);

    // Use demo mode if no valid API key
    if (USE_DEMO_MODE) {
      setTimeout(() => {
        // Search across all mock articles
        const allArticles = Object.values(mockArticles).flat();
        const filtered = allArticles.filter(article =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.description.toLowerCase().includes(query.toLowerCase())
        );
        setArticles(filtered);
        setIsDemoMode(true);
        setLoading(false);
      }, 800);
      return;
    }

    try {
      const endpoint = `${BASE_URL}/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;
      const response = await fetch(endpoint);
      const data = await response.json();

      if (data.status === 'ok') {
        setArticles(data.articles || []);
        setIsDemoMode(false);
      } else {
        // Fallback to demo mode search
        const allArticles = Object.values(mockArticles).flat();
        const filtered = allArticles.filter(article =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.description.toLowerCase().includes(query.toLowerCase())
        );
        setArticles(filtered);
        setIsDemoMode(true);
        setError('Using demo mode. Add your API key to get live news.');
      }
    } catch (err) {
      // Fallback to demo mode search
      const allArticles = Object.values(mockArticles).flat();
      const filtered = allArticles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.description.toLowerCase().includes(query.toLowerCase())
      );
      setArticles(filtered);
      setIsDemoMode(true);
      setError('Using demo mode. Add your API key to get live news.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSearchQuery('');
  };

  return (
    <div className="app">
      <NavBar
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      <NewsTicker />

      <CategoryFilter
        selectedCategory={category}
        onCategoryChange={handleCategoryChange}
      />

      <Container className="news-container">

        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="hero-title">
            Stay <span className="gradient-text">Informed</span>, Stay Ahead
          </h1>
          <p className="hero-subtitle">
            {activeView === 'home' && "Your daily dose of breaking news and trending stories from around the world"}
            {activeView === 'trending' && "The most popular stories people are talking about right now"}
            {activeView === 'saved' && "Your personal collection of important articles and stories"}
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-container">
            <Spinner animation="border" variant="primary" className="loading-spinner" />
            <p className="loading-text">Loading amazing stories...</p>
          </div>
        )}

        {/* Error State - Only show if not in demo mode */}
        {error && !isDemoMode && (
          <Alert variant="danger" className="error-alert">
            <Alert.Heading>⚠️ Oops! Something went wrong</Alert.Heading>
            <p>{error}</p>
            {error.includes('apiKey') && (
              <p className="mt-2">
                <strong>Note:</strong> Please add your NewsAPI key in App.jsx.
                Get one free at <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer">newsapi.org</a>
              </p>
            )}
          </Alert>
        )}

        {/* Results Header */}
        {!loading && !error && articles.length > 0 && (
          <div className="results-header">
            <h3 className="results-title">
              {activeView === 'saved' ? 'Your Saved Articles' :
                activeView === 'trending' ? 'Trending Worldwide' :
                  isSearching ? `Search Results for "${searchQuery}"` :
                    `Latest in ${category.charAt(0).toUpperCase() + category.slice(1)}`}
            </h3>
            <span className="results-count">{articles.length} articles found</span>
          </div>
        )}

        {/* News Grid */}
        {!loading && !error && articles.length > 0 && (
          <Row className="g-4 news-grid">
            {articles.map((article, index) => (
              <Col key={index} xs={12} sm={6} lg={4}>
                <NewsCard
                  article={article}
                  index={index}
                  onSave={handleSaveArticle}
                  isSaved={isArticleSaved(article)}
                />
              </Col>
            ))}
          </Row>
        )}

        {/* No Results */}
        {!loading && !error && articles.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">
              {activeView === 'saved' ? '📑' : '📰'}
            </div>
            <h3>{activeView === 'saved' ? 'No saved articles' : 'No articles found'}</h3>
            <p>{activeView === 'saved' ? 'Start bookmarking articles to see them here!' : 'Try a different category or search term'}</p>
          </div>
        )}
      </Container>

      {/* Footer */}
      <footer className="app-footer">
        <Container>
          <p className="footer-text">
            Made with ❤️ using React & Bootstrap | Powered by{' '}
            <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer">
              NewsAPI
            </a>
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
