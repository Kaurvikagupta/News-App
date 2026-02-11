import React from 'react';
import './NewsTicker.css';

const NewsTicker = () => {
    const headlines = [
        "आज की ताज़ा खबर: दुनिया भर में हो रही है हलचल, जुड़ें हमारे साथ लाइव अपडेट के लिए।",
        "BREAKING NEWS: India reaches new milestones in technology and space exploration.",
        "WEATHER UPDATE: Severe weather alerts issued for northern regions, experts suggest caution.",
        "SPORTS: Major victory for the home team in the latest championship match.",
        "TECH TRENDS: AI integration is reshaping the future of digital communications worldwide.",
        "ECONOMY: Stock markets reach record highs amidst global economic shifts.",
        "ENTERTAINMENT: New blockbuster releases set to dominate the box office this weekend."
    ];

    return (
        <div className="ticker-container">
            <div className="ticker-label">
                <span className="live-icon">●</span> BREAKING NEWS
            </div>
            <div className="ticker-wrapper">
                <div className="ticker-scroll">
                    {headlines.map((headline, index) => (
                        <span key={index} className="ticker-item">
                            {headline} <span className="ticker-separator">|</span>
                        </span>
                    ))}
                    {/* Duplicate headlines for continuous effect */}
                    {headlines.map((headline, index) => (
                        <span key={`dup-${index}`} className="ticker-item">
                            {headline} <span className="ticker-separator">|</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsTicker;
