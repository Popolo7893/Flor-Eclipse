const products = [
    {
        id: 1,
        name: "Pala de Jardín",
        price: 75,
        image: "img/pala.jpg"
    },
    {
        id: 2,
        name: "Regadera",
        price: 120,
        image: "img/regadera.jpg"
    },
    {
        id: 3,
        name: "Maceta Decorativa",
        price: 200,
        image: "img/maceta.jpg"
    }
];

const productsContainer = document.getElementById('products-container');

function renderProducts() {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="btn buy-btn" data-id="${product.id}">Comprar</button>
        `;
        productsContainer.appendChild(productCard);
    });
    setupBuyButtons();
}

function setupBuyButtons() {
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = parseInt(button.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            addToCart(product);
        });
    });
}

renderProducts();
