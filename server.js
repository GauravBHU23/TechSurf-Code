const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Simulated API endpoint to return components and content types
app.get('/api/getComponents', (req, res) => {
    // Simulate data from AI (RAG, Knowledge Graph, etc.)
    const designPattern = {
        name: "E-commerce",
        color_scheme: ["#FFFFFF", "#FFDD57", "#333333"],
        layout: "grid"
    };

    const components = {
        navbar: {
            links: ["Home", "Shop", "Cart", "Profile"]
        },
        products: [
            { image: "https://via.placeholder.com/100", name: "Product 1", price: 29.99, button_text: "Buy Now" },
            { image: "https://via.placeholder.com/100", name: "Product 2", price: 19.99, button_text: "Buy Now" },
            { image: "https://via.placeholder.com/100", name: "Product 3", price: 39.99, button_text: "Buy Now" }
        ],
        footer: {
            text: "© 2024 Online Store. All rights reserved.",
            links: ["Terms of Service", "Privacy Policy"]
        }
    };

    // Send back the components
    res.json(components);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
