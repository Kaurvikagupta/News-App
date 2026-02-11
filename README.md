# 📰 NewsHub - Modern News Application

A beautiful, responsive news application built with **React.js** and **Bootstrap 5**. Stay informed with the latest breaking news from around the world with professional features like smart search and live news tickers.

![NewsHub](https://img.shields.io/badge/React-19.2.0-61dafb?style=for-the-badge&logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952b3?style=for-the-badge&logo=bootstrap)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646cff?style=for-the-badge&logo=vite)

## ✨ Premium Features

- **📺 Live News Ticker**: "Aaj Tak" style horizontal scrolling headlines for breaking news.
- **🔍 Smart Search Suggestions**: Intelligent dropdown with trending topics, popular searches, and categories.
- **🔖 Article Bookmarking**: Save your favorite stories to the "Saved" section (persisted in local storage).
- **🔥 Trending View**: Dedicated section for the most talked-about stories worldwide.
- **🌐 Multiple Categories**: Browse news by Business, Technology, Science, Health, Sports, and Entertainment.
- **📱 Ultra-Responsive**: Fully optimized for mobile, tablet, and desktop with glassmorphism effects.
- **🎨 Visual Excellence**: Dark mode theme with curated gradients, micro-animations, and premium typography.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- NewsAPI key (free from [newsapi.org](https://newsapi.org))

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/YOUR_USERNAME/news-mag.git
cd news-mag
```

2. **Install dependencies**:
```bash
npm install
```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add your NewsAPI key:
   ```env
   VITE_NEWS_API_KEY=your_actual_api_key_here
   ```

4. **Start the development server**:
```bash
npm run dev
```

## 🛠️ Technologies Used

- **React 19** - Library for building user interfaces.
- **Bootstrap 5 & React-Bootstrap** - For professional layout and UI components.
- **Vite** - Lightning-fast build tool and dev server.
- **NewsAPI** - Robust backend for global news data.
- **Google Fonts** - *Inter* and *Outfit* for a premium editorial look.

## 📁 Project Structure

```
news-mag/
├── src/
│   ├── components/
│   │   ├── NavBar.jsx        # Navigation with Smart Search
│   │   ├── NewsTicker.jsx    # "Aaj Tak" style scrolling ticker
│   │   ├── CategoryFilter.jsx # Categorized navigation
│   │   ├── NewsCard.jsx      # Article cards with Save feature
│   │   └── ...
│   ├── App.jsx               # Main Logic & State Management
│   ├── mockData.js           # Demo mode fallback data
│   └── index.css             # Design System & Core Styles
├── .env.example              # Template for API keys
└── README.md
```

## 🎯 Design Philosophy

This project prioritizes **Visual Excellence** and **User Engagement**:
- **Glassmorphism**: 20px blur effects on navigation and dropdowns.
- **Micro-animations**: Subtle scale-up on hover and slide-in animations for lists.
- **Color Palette**: Deep space Blue (`#16213e`) paired with vibrant Indigo-Purple gradients.
- **Mobile First**: Optimized touch targets and horizontal scrolling categories for narrow screens.

## 📝 Usage Notes

- The app includes a **Demo Mode**. If no API key is provided, it will automatically switch to high-quality mock data so the app remains fully functional for demonstration.
- **Saved Articles**: Uses browsers' `localStorage`. Articles you bookmark will remain saved even after closing the browser.

## 📄 License

This project is open source and available under the MIT License.

---

**Built by Antigravity AI | Inspired by Modern News Portals** 📰✨
