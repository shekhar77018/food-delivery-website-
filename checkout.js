// checkout.js
// This script loads cart items from localStorage and handles checkout form

function getCart() {
    try {
        return JSON.parse(localStorage.getItem('cart')) || [];
    } catch {
        return [];
    }
}

function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCheckoutDisplay() {
    const cart = getCart();
    const cartList = document.querySelector('.checkout-cart-list');
    const checkoutTotal = document.getElementById('checkout-total');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach((item, idx) => {
        const priceNum = parseInt(item.price.replace(/[^0-9]/g, ''));
        total += priceNum;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `${item.name} - ${item.price}`;
        cartList.appendChild(div);
    });
    checkoutTotal.textContent = `₹${total}`;
}

document.addEventListener('DOMContentLoaded', updateCheckoutDisplay);

const checkoutForm = document.querySelector('.checkout-form');
if(checkoutForm) {
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const cart = getCart();
        if(cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        const name = checkoutForm.querySelector('input[placeholder="Your Name"]').value;
        const address = checkoutForm.querySelector('input[placeholder="Address"]').value;
        const phone = checkoutForm.querySelector('input[placeholder="Phone Number"]').value;
        alert(`Thank you, ${name}! Your order for ${cart.length} item(s) will be delivered to ${address}.`);
        setCart([]);
        updateCheckoutDisplay();
        checkoutForm.reset();
    });
}
