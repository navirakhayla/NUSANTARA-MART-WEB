let cart = [];
let transactions = [];
let loyaltyPoints = 0;

// Add to cart
function addToCart(productName, price) {
    cart.push({ productName, price });
    displayCart();
}

// Display cart
function displayCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price}`;
        cartElement.appendChild(li);
    });
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    loyaltyPoints += Math.floor(total / 10);

    const transaction = {
        id: transactions.length + 1,
        total,
        date: new Date().toLocaleString(),
        items: [...cart],
    };

    transactions.push(transaction);
    cart = [];

    alert(`Checkout successful! Total: $${total}`);
    displayCart();
    displayTransactions();
    updateLoyaltyPoints();
}

// Display transactions
function displayTransactions() {
    const historyElement = document.getElementById('transaction-history');
    historyElement.innerHTML = '';
    transactions.forEach((transaction) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p><strong>Transaction #${transaction.id}</strong></p>
            <p>Total: $${transaction.total}</p>
            <p>Date: ${transaction.date}</p>
        `;
        historyElement.appendChild(div);
    });
}

// Update loyalty points
function updateLoyaltyPoints() {
    document.getElementById('loyalty-points').textContent = loyaltyPoints;
}

