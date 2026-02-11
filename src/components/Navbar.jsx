import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Container, Nav, Form, InputGroup, Button, ListGroup } from 'react-bootstrap';
import './NavBar.css';

const NavBar = ({ onSearch, searchQuery, setSearchQuery, activeView, setActiveView }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const searchRef = useRef(null);

  // Popular search suggestions organized by category
  const suggestions = {
    trending: [
      { text: 'AI Technology', icon: '🔥', category: 'Trending' },
      { text: 'Climate Change', icon: '🔥', category: 'Trending' },
      { text: 'Space Exploration', icon: '🔥', category: 'Trending' },
      { text: 'Cryptocurrency', icon: '🔥', category: 'Trending' }
    ],
    popular: [
      { text: 'Stock Market', icon: '📈', category: 'Popular' },
      { text: 'Electric Vehicles', icon: '⚡', category: 'Popular' },
      { text: 'World Cup', icon: '⚽', category: 'Popular' },
      { text: 'Movie Releases', icon: '🎬', category: 'Popular' }
    ],
    topics: [
      { text: 'Breaking News', icon: '📰', category: 'Topics' },
      { text: 'Politics', icon: '🏛️', category: 'Topics' },
      { text: 'Innovation', icon: '💡', category: 'Topics' },
      { text: 'Healthcare', icon: '🏥', category: 'Topics' },
      { text: 'Education', icon: '📚', category: 'Topics' },
      { text: 'Environment', icon: '🌍', category: 'Topics' }
    ]
  };

  // Flatten all suggestions for filtering
  const allSuggestions = [
    ...suggestions.trending,
    ...suggestions.popular,
    ...suggestions.topics
  ];

  useEffect(() => {
    // Filter suggestions based on search query
    if (searchQuery.trim()) {
      const filtered = allSuggestions.filter(item =>
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      // Show all suggestions when input is empty
      setFilteredSuggestions(allSuggestions);
    }
  }, [searchQuery]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.text);
    onSearch(suggestion.text);
    setShowSuggestions(false);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleNavClick = (view) => {
    setActiveView(view);
    setShowSuggestions(false);
  };

  // Group suggestions by category for display
  const groupedSuggestions = filteredSuggestions.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <Navbar expand="lg" className="navbar-custom sticky-top">
      <Container fluid className="px-4">
        <Navbar.Brand href="#" className="brand-logo" onClick={() => handleNavClick('home')}>
          <span className="logo-icon">📰</span>
          <span className="gradient-text brand-text">NewsHub</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto me-3 align-items-center">
            <Nav.Link
              href="#"
              className={`nav-link-custom ${activeView === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#"
              className={`nav-link-custom ${activeView === 'trending' ? 'active' : ''}`}
              onClick={() => handleNavClick('trending')}
            >
              Trending
            </Nav.Link>
            <Nav.Link
              href="#"
              className={`nav-link-custom ${activeView === 'saved' ? 'active' : ''}`}
              onClick={() => handleNavClick('saved')}
            >
              Saved
            </Nav.Link>
          </Nav>

          <div className="search-wrapper" ref={searchRef}>
            <Form onSubmit={handleSubmit} className="d-flex search-form">
              <InputGroup className="search-input-group">
                <Form.Control
                  type="search"
                  placeholder="Search news..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={handleInputFocus}
                  autoComplete="off"
                />
                <Button type="submit" className="btn-gradient search-btn">
                  🔍
                </Button>
              </InputGroup>
            </Form>

            {/* Search Suggestions Dropdown */}
            {showSuggestions && (
              <div className="search-suggestions">
                {Object.keys(groupedSuggestions).length > 0 ? (
                  <>
                    {Object.entries(groupedSuggestions).map(([category, items]) => (
                      <div key={category} className="suggestion-group">
                        <div className="suggestion-category-label">
                          {category === 'Trending' && '🔥 '}
                          {category === 'Popular' && '⭐ '}
                          {category === 'Topics' && '📌 '}
                          {category}
                        </div>
                        <ListGroup variant="flush">
                          {items.map((item, index) => (
                            <ListGroup.Item
                              key={`${category}-${index}`}
                              className="suggestion-item"
                              onClick={() => handleSuggestionClick(item)}
                              action
                            >
                              <span className="suggestion-icon">{item.icon}</span>
                              <span className="suggestion-text">{item.text}</span>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="no-suggestions">
                    <span className="no-suggestions-icon">🔍</span>
                    <p>No suggestions found</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
