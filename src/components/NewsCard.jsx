import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import './NewsCard.css';

const NewsCard = ({ article, index, onSave, isSaved }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

        if (diffInHours < 1) return 'Just now';
        if (diffInHours < 24) return `${diffInHours}h ago`;
        if (diffInHours < 48) return 'Yesterday';
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    const getSourceBadgeColor = (source) => {
        const colors = ['primary', 'success', 'danger', 'warning', 'info'];
        const hash = source.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return colors[hash % colors.length];
    };

    const defaultImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23667eea;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23764ba2;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="400" height="250" fill="url(%23grad)"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="white" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';

    return (
        <Card
            className="news-card hover-lift fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="card-image-wrapper">
                <Card.Img
                    variant="top"
                    src={article.urlToImage || defaultImage}
                    className="card-image"
                    onError={(e) => { e.target.src = defaultImage; }}
                />
                <div className="image-overlay"></div>
                <Badge
                    bg={getSourceBadgeColor(article.source.name)}
                    className="source-badge"
                >
                    {article.source.name}
                </Badge>
                <button
                    className={`save-btn ${isSaved ? 'saved' : ''}`}
                    onClick={(e) => {
                        e.preventDefault();
                        onSave(article);
                    }}
                    title={isSaved ? "Remove from saved" : "Save article"}
                >
                    {isSaved ? '🔖' : '📑'}
                </button>
            </div>

            <Card.Body className="card-body-custom">
                <div className="card-meta">
                    <span className="publish-date">
                        <i className="bi bi-clock"></i> {formatDate(article.publishedAt)}
                    </span>
                    <span className="author-name">
                        {article.author ? `By ${article.author.split(',')[0]}` : 'Unknown Author'}
                    </span>
                </div>

                <Card.Title className="card-title-custom">
                    {article.title}
                </Card.Title>

                <Card.Text className="card-description">
                    {article.description || 'No description available for this article.'}
                </Card.Text>

                <div className="card-footer-custom">
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-gradient btn-sm read-more-btn"
                    >
                        Read Full Story →
                    </a>
                </div>
            </Card.Body>
        </Card>
    );
};

export default NewsCard;
