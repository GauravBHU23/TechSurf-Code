// Simulating dynamic content loading
document.addEventListener("DOMContentLoaded", async () => {
    // Fetch the design pattern and content types from the backend
    const response = await fetch('/api/getComponents');
    const data = await response.json();

    // Generate and inject the Navigation Bar
    generateNavbar(data.navbar);
    
    // Generate and inject the Product Cards
    generateProductCards(data.products);
    
    // Generate and inject the Footer
    generateFooter(data.footer);
});

function generateNavbar(navbar) {
    const navbarElement = document.getElementById('navbar');
    navbar.links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = `#${link.toLowerCase()}`;
        anchor.textContent = link;
        navbarElement.appendChild(anchor);
    });
}

function generateProductCards(products) {
    const productSection = document.getElementById('product-section');
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="Product Image" style="width:100px;">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button>${product.button_text}</button>
        `;
        productSection.appendChild(card);
    });
}

function generateFooter(footer) {
    const footerElement = document.getElementById('footer');
    footerElement.innerHTML = `
        <p>${footer.text}</p>
        <a href="#">${footer.links[0]}</a> | <a href="#">${footer.links[1]}</a>
    `;
}
