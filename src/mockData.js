// Mock news data for demo purposes
export const mockArticles = {
    general: [
        {
            source: { name: "TechCrunch" },
            author: "Sarah Johnson",
            title: "Breaking: Major Tech Company Announces Revolutionary AI Platform",
            description: "In a groundbreaking announcement today, industry leaders unveiled a new artificial intelligence platform that promises to transform how businesses operate in the digital age.",
            url: "https://example.com/article1",
            urlToImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
            publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
        },
        {
            source: { name: "BBC News" },
            author: "Michael Chen",
            title: "Global Climate Summit Reaches Historic Agreement",
            description: "World leaders have reached a comprehensive agreement on climate action, setting ambitious targets for carbon reduction and renewable energy adoption.",
            url: "https://example.com/article2",
            urlToImage: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
            publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString()
        },
        {
            source: { name: "Reuters" },
            author: "Emma Williams",
            title: "Stock Markets Hit Record Highs Amid Economic Recovery",
            description: "Major stock indices reached all-time highs as investors show confidence in the global economic recovery and corporate earnings reports exceed expectations.",
            url: "https://example.com/article3",
            urlToImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
            publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString()
        },
        {
            source: { name: "CNN" },
            author: "David Park",
            title: "Scientists Discover Potential Cure for Common Disease",
            description: "Researchers at a leading university have made a breakthrough discovery that could lead to a cure for a disease affecting millions worldwide.",
            url: "https://example.com/article4",
            urlToImage: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80",
            publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString()
        },
        {
            source: { name: "The Guardian" },
            author: "Lisa Taylor",
            title: "New Space Mission Launches to Explore Distant Planet",
            description: "A historic space mission has successfully launched, carrying advanced instruments to study a potentially habitable planet beyond our solar system.",
            url: "https://example.com/article5",
            urlToImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
            publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
            source: { name: "Forbes" },
            author: "Robert Martinez",
            title: "Innovative Startup Raises $100M in Funding Round",
            description: "A promising tech startup focused on sustainable solutions has secured significant funding from major venture capital firms and strategic investors.",
            url: "https://example.com/article6",
            urlToImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
            publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
        }
    ],

    business: [
        {
            source: { name: "Wall Street Journal" },
            author: "Amanda Foster",
            title: "Tech Giant Reports Record-Breaking Quarterly Earnings",
            description: "The company exceeded analyst expectations with strong growth in cloud services and enterprise solutions, driving shares up 8% in after-hours trading.",
            url: "https://example.com/business1",
            urlToImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString()
        },
        {
            source: { name: "Bloomberg" },
            author: "James Wilson",
            title: "Major Merger Announced in Pharmaceutical Industry",
            description: "Two leading pharmaceutical companies have agreed to merge in a deal valued at $50 billion, creating one of the world's largest healthcare conglomerates.",
            url: "https://example.com/business2",
            urlToImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
            publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString()
        },
        {
            source: { name: "Financial Times" },
            author: "Catherine Lee",
            title: "Electric Vehicle Sales Surge 150% Year-Over-Year",
            description: "Consumer demand for electric vehicles continues to accelerate, with sales reaching unprecedented levels as charging infrastructure expands.",
            url: "https://example.com/business3",
            urlToImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
            publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString()
        }
    ],

    technology: [
        {
            source: { name: "Wired" },
            author: "Alex Thompson",
            title: "Next-Generation Quantum Computer Achieves Milestone",
            description: "Scientists have successfully demonstrated quantum supremacy with a new processor that can solve complex problems exponentially faster than classical computers.",
            url: "https://example.com/tech1",
            urlToImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
            publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString()
        },
        {
            source: { name: "The Verge" },
            author: "Jessica Brown",
            title: "Revolutionary Smartphone Features Advanced AI Camera",
            description: "The latest flagship smartphone incorporates cutting-edge AI technology that revolutionizes mobile photography and computational imaging.",
            url: "https://example.com/tech2",
            urlToImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
            publishedAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString()
        },
        {
            source: { name: "Ars Technica" },
            author: "Kevin Zhang",
            title: "Breakthrough in Battery Technology Promises Longer Life",
            description: "Researchers have developed a new battery chemistry that could triple the lifespan of electronic devices while reducing charging times significantly.",
            url: "https://example.com/tech3",
            urlToImage: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
            publishedAt: new Date(Date.now() - 15 * 60 * 60 * 1000).toISOString()
        }
    ],

    science: [
        {
            source: { name: "Nature" },
            author: "Dr. Maria Garcia",
            title: "Scientists Map Complete Human Brain Connectivity",
            description: "A decade-long research project has produced the most detailed map of human brain connections, offering insights into neurological disorders.",
            url: "https://example.com/science1",
            urlToImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
            publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString()
        },
        {
            source: { name: "Science Daily" },
            author: "Thomas Anderson",
            title: "New Species of Deep-Sea Creature Discovered",
            description: "Marine biologists have identified a previously unknown species living in the deepest parts of the ocean, challenging our understanding of extreme environments.",
            url: "https://example.com/science2",
            urlToImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
            publishedAt: new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString()
        }
    ],

    health: [
        {
            source: { name: "Medical News Today" },
            author: "Dr. Rachel Kim",
            title: "New Study Reveals Benefits of Mediterranean Diet",
            description: "A comprehensive study confirms that the Mediterranean diet significantly reduces risk of heart disease and promotes longevity.",
            url: "https://example.com/health1",
            urlToImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
            publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString()
        },
        {
            source: { name: "Health Magazine" },
            author: "Jennifer Scott",
            title: "Innovative Therapy Shows Promise for Cancer Treatment",
            description: "Clinical trials demonstrate that a new immunotherapy approach achieves remarkable results in treating certain types of cancer.",
            url: "https://example.com/health2",
            urlToImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
            publishedAt: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString()
        }
    ],

    sports: [
        {
            source: { name: "ESPN" },
            author: "Chris Davis",
            title: "Championship Final Ends in Dramatic Last-Second Victory",
            description: "In one of the most exciting finishes in sports history, the underdog team secured victory with a stunning play in the final seconds.",
            url: "https://example.com/sports1",
            urlToImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
            publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString()
        },
        {
            source: { name: "Sports Illustrated" },
            author: "Mark Robinson",
            title: "Olympic Athlete Breaks World Record in Stunning Performance",
            description: "The young athlete shattered a 15-year-old world record, earning gold and inspiring a new generation of competitors.",
            url: "https://example.com/sports2",
            urlToImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
            publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString()
        }
    ],

    entertainment: [
        {
            source: { name: "Variety" },
            author: "Nicole Harris",
            title: "Blockbuster Film Breaks Box Office Records Worldwide",
            description: "The highly anticipated sequel has become the fastest film to reach $1 billion in global box office revenue, thrilling audiences everywhere.",
            url: "https://example.com/entertainment1",
            urlToImage: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
            publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString()
        },
        {
            source: { name: "Entertainment Weekly" },
            author: "Daniel Cooper",
            title: "Award-Winning Series Returns for Final Season",
            description: "The critically acclaimed series announces its final season, promising an epic conclusion to the beloved story that captivated millions.",
            url: "https://example.com/entertainment2",
            urlToImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
            publishedAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString()
        }
    ],

    trending: [
        {
            source: { name: "Global News" },
            author: "Trending Staff",
            title: "Viral Story: How a Small Idea Changed the World",
            description: "A story that started on social media has now captured the attention of world leaders and major corporations.",
            url: "https://example.com/trending1",
            urlToImage: "https://images.unsplash.com/photo-1504711331083-9c897954fb10?w=800&q=80",
            publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString()
        },
        {
            source: { name: "Internet Trends" },
            author: "Tech Pulse",
            title: "Top 10 Most Searched Topics of the Month",
            description: "Explore what the world is searching for right now, from new food trends to emerging technologies.",
            url: "https://example.com/trending2",
            urlToImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
            publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString()
        }
    ]
};
