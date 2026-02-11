import React from 'react';
import { Container, ButtonGroup, Button } from 'react-bootstrap';
import './CategoryFilter.css';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
    const categories = [
        { id: 'general', name: 'All News', icon: '🌐' },
        { id: 'business', name: 'Business', icon: '💼' },
        { id: 'technology', name: 'Technology', icon: '💻' },
        { id: 'science', name: 'Science', icon: '🔬' },
        { id: 'health', name: 'Health', icon: '🏥' },
        { id: 'sports', name: 'Sports', icon: '⚽' },
        { id: 'entertainment', name: 'Entertainment', icon: '🎬' },
    ];

    return (
        <div className="category-filter-section">
            <Container>
                <h2 className="section-title gradient-text">Explore Topics</h2>
                <div className="categories-wrapper">
                    <ButtonGroup className="category-buttons">
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                variant="outline-primary"
                                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                                onClick={() => onCategoryChange(category.id)}
                            >
                                <span className="category-icon">{category.icon}</span>
                                <span className="category-name">{category.name}</span>
                            </Button>
                        ))}
                    </ButtonGroup>
                </div>
            </Container>
        </div>
    );
};

export default CategoryFilter;
