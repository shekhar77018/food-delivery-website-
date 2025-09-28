// Feedback form logic
const feedbackForm = document.querySelector('.feedback-form');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const feedbackMsg = document.querySelector('.feedback-message');
    feedbackMsg.textContent = 'Thank you for your feedback!';
    feedbackMsg.style.display = 'block';
    feedbackForm.reset();
    setTimeout(() => {
      feedbackMsg.style.display = 'none';
    }, 3000);
  });
}
// Menu data for sorting/filtering

const menuData = [
  {
    name: 'Pepperoni Pizza', price: '₹999', type: 'pizza', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80', desc: 'Cheesy pepperoni pizza with tomato sauce.'
  },
  {
    name: 'Classic Burger', price: '₹799', type: 'burger', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80', desc: 'Grilled beef patty with lettuce and tomato.'
  },
  {
    name: 'Sushi Platter', price: '₹1199', type: 'sushi', img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=400&q=80', desc: 'Assorted sushi rolls and sashimi.'
  },
  {
    name: 'Veggie Pizza', price: '₹899', type: 'pizza', img: 'https://images.unsplash.com/photo-1548365328-8b8490c7b7b7?auto=format&fit=crop&w=400&q=80', desc: 'Loaded with fresh veggies and mozzarella.'
  },
  {
    name: 'Chicken Burger', price: '₹849', type: 'burger', img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', desc: 'Crispy chicken patty with spicy mayo.'
  },
  {
    name: 'California Roll', price: '₹1099', type: 'sushi', img: 'https://images.unsplash.com/photo-1464306076886-debede6bbf09?auto=format&fit=crop&w=400&q=80', desc: 'Crab, avocado, and cucumber roll.'
  },
  {
    name: 'Margherita Pizza', price: '₹799', type: 'pizza', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', desc: 'Classic pizza with tomato, basil, and cheese.'
  },
  {
    name: 'Double Cheese Burger', price: '₹899', type: 'burger', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', desc: 'Double patty, double cheese.'
  },
  {
    name: 'Spicy Tuna Roll', price: '₹1299', type: 'sushi', img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80', desc: 'Tuna, spicy mayo, and cucumber.'
  },
  {
    name: 'Paneer Pizza', price: '₹950', type: 'pizza', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80', desc: 'Indian style pizza with paneer and spices.'
  },
  {
    name: 'Fish Burger', price: '₹899', type: 'burger', img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', desc: 'Fried fish fillet with tartar sauce.'
  },
  {
    name: 'Avocado Sushi', price: '₹999', type: 'sushi', img: 'https://images.unsplash.com/photo-1464306076886-debede6bbf09?auto=format&fit=crop&w=400&q=80', desc: 'Fresh avocado and rice roll.'
  },
  {
    name: 'BBQ Chicken Pizza', price: '₹1050', type: 'pizza', img: 'https://images.unsplash.com/photo-1548365328-8b8490c7b7b7?auto=format&fit=crop&w=400&q=80', desc: 'BBQ chicken, onions, and cheese.'
  },
  {
    name: 'Veg Burger', price: '₹750', type: 'burger', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80', desc: 'Vegetable patty with lettuce and tomato.'
  },
  {
    name: 'Tempura Sushi', price: '₹1150', type: 'sushi', img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=400&q=80', desc: 'Tempura shrimp and veggies.'
  },
  {
  name: 'Farmhouse Pizza', price: '₹999', type: 'pizza', img: 'https://images.dominos.co.in/menu_new/farmhouse.jpg', desc: 'Loaded with veggies and cheese.'
  },
  {
    name: 'Egg Burger', price: '₹799', type: 'burger', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', desc: 'Egg patty with cheese and mayo.'
  },
  {
    name: 'Dragon Roll', price: '₹1350', type: 'sushi', img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80', desc: 'Eel, cucumber, and avocado.'
  },
  {
    name: 'Tandoori Pizza', price: '₹1100', type: 'pizza', img: 'https://images.unsplash.com/photo-1548365328-8b8490c7b7b7?auto=format&fit=crop&w=400&q=80', desc: 'Tandoori chicken and onions.'
  },
  {
    name: 'Cheese Burst Burger', price: '₹950', type: 'burger', img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', desc: 'Cheese filled patty.'
  },
  {
    name: 'Rainbow Sushi', price: '₹1400', type: 'sushi', img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=400&q=80', desc: 'Assorted fish and veggies.'
  },
  {
    name: 'Mexican Pizza', price: '₹1050', type: 'pizza', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80', desc: 'Beans, jalapenos, and cheese.'
  },
  {
    name: 'Spicy Burger', price: '₹850', type: 'burger', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80', desc: 'Spicy patty with hot sauce.'
  },
  {
    name: 'Salmon Sushi', price: '₹1200', type: 'sushi', img: 'https://images.unsplash.com/photo-1464306076886-debede6bbf09?auto=format&fit=crop&w=400&q=80', desc: 'Fresh salmon and rice.'
  },
  {
    name: 'Hawaiian Pizza', price: '₹950', type: 'pizza', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', desc: 'Pineapple, ham, and cheese.'
  },
  {
    name: 'Mushroom Burger', price: '₹800', type: 'burger', img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', desc: 'Mushroom patty with cheese.'
  },
  {
    name: 'Shrimp Sushi', price: '₹1250', type: 'sushi', img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80', desc: 'Shrimp and avocado roll.'
  }
  ,
  {
    name: 'Falafel Wrap', price: '₹700', type: 'burger', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', desc: 'Middle Eastern falafel with veggies in a wrap.'
  },
  {
    name: 'Paneer Tikka', price: '₹850', type: 'pizza', img: 'https://images.unsplash.com/photo-1505250469483-788e23f0a4c1?auto=format&fit=crop&w=400&q=80', desc: 'Indian paneer tikka on a pizza base.'
  },
  {
    name: 'Chicken Shawarma', price: '₹950', type: 'burger', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80', desc: 'Grilled chicken shawarma with garlic sauce.'
  },
  {
    name: 'Veggie Sushi', price: '₹900', type: 'sushi', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80', desc: 'Colorful veggie sushi rolls.'
  },
  {
    name: 'Lamb Burger', price: '₹1050', type: 'burger', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', desc: 'Juicy lamb patty with mint sauce.'
  },
  {
    name: 'Rainbow Veg Pizza', price: '₹1000', type: 'pizza', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', desc: 'Pizza topped with colorful vegetables.'
  },
  {
    name: 'Teriyaki Sushi', price: '₹1300', type: 'sushi', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80', desc: 'Sushi rolls with teriyaki glaze.'
  },
  {
    name: 'Grilled Veg Burger', price: '₹800', type: 'burger', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80', desc: 'Grilled vegetable patty with fresh greens.'
  }
  ,
  {
    name: 'Greek Salad', price: '₹650', type: 'pizza', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', desc: 'Fresh salad with feta, olives, and veggies.'
  },
  {
    name: 'Egg Fried Rice', price: '₹700', type: 'burger', img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', desc: 'Classic egg fried rice with veggies.'
  },
  {
    name: 'Chicken Tikka Masala', price: '₹1200', type: 'pizza', img: 'https://images.unsplash.com/photo-1505250469483-788e23f0a4c1?auto=format&fit=crop&w=400&q=80', desc: 'Spicy chicken tikka in creamy sauce.'
  },
  {
    name: 'Veg Spring Rolls', price: '₹500', type: 'burger', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80', desc: 'Crispy rolls stuffed with veggies.'
  },
  {
    name: 'Miso Soup', price: '₹400', type: 'sushi', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80', desc: 'Japanese soup with tofu and seaweed.'
  },
  {
    name: 'Chocolate Brownie', price: '₹350', type: 'pizza', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', desc: 'Rich chocolate brownie dessert.'
  },
  {
    name: 'Fruit Smoothie', price: '₹300', type: 'burger', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80', desc: 'Mixed fruit smoothie, healthy and fresh.'
  },
  {
    name: 'Prawn Tempura', price: '₹950', type: 'sushi', img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=400&q=80', desc: 'Crispy fried prawn tempura.'
  },
  {
    name: 'Garlic Bread', price: '₹250', type: 'pizza', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80', desc: 'Toasted bread with garlic and butter.'
  }
  ,
  {
    name: 'Pasta', price: '₹550', type: 'pizza', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', desc: 'Creamy Italian pasta with herbs.'
  },
  {
    name: 'Maggie', price: '₹120', type: 'burger', img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', desc: 'Classic Indian maggie noodles.'
  },
  {
    name: 'French Fries', price: '₹180', type: 'burger', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80', desc: 'Crispy golden French fries.'
  }
  ,
  {
    name: 'Chicken Caesar Salad', price: '₹750', type: 'pizza', img: 'https://images.unsplash.com/photo-1464306076886-debede6bbf09?auto=format&fit=crop&w=400&q=80', desc: 'Grilled chicken, lettuce, parmesan, and Caesar dressing.'
  },
  {
    name: 'Veg Hakka Noodles', price: '₹600', type: 'burger', img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', desc: 'Stir-fried noodles with vegetables.'
  },
  {
    name: 'Tandoori Paneer Pizza', price: '₹950', type: 'pizza', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80', desc: 'Pizza topped with tandoori paneer and veggies.'
  },
  {
    name: 'Chicken Wings', price: '₹650', type: 'burger', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80', desc: 'Spicy and crispy chicken wings.'
  },
  {
    name: 'Mushroom Risotto', price: '₹850', type: 'pizza', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', desc: 'Creamy risotto with mushrooms.'
  },
  {
    name: 'Falooda', price: '₹300', type: 'burger', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80', desc: 'Indian dessert with ice cream and vermicelli.'
  },
  {
    name: 'Egg Curry', price: '₹500', type: 'pizza', img: 'https://images.unsplash.com/photo-1505250469483-788e23f0a4c1?auto=format&fit=crop&w=400&q=80', desc: 'Spicy Indian egg curry.'
  },
  {
    name: 'Veg Manchurian', price: '₹550', type: 'burger', img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', desc: 'Vegetable balls in tangy sauce.'
  },
  {
    name: 'Fruit Salad', price: '₹350', type: 'pizza', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', desc: 'Fresh seasonal fruits.'
  }
];

function renderMenu(menuItems) {
  const menuList = document.querySelector('.menu-list');
  menuList.innerHTML = '';
  menuItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <span>${item.price}</span>
      <button class="order-btn">Add to Order</button>
    `;
    menuList.appendChild(card);
  });
  // Re-attach order button listeners
  document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const card = btn.closest('.menu-card');
      const name = card.querySelector('h3').textContent;
      const price = card.querySelector('span').textContent;
      let found = false;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name && cart[i].price === price) {
          cart[i].qty += 1;
          found = true;
          break;
        }
      }
      if (!found) {
        cart.push({ name, price, qty: 1 });
      }
      updateCartDisplay();
      saveCart();
      showPopup(`${name} added to cart!`);
    });
  });
function showPopup(message) {
  let popup = document.getElementById('cart-popup');
  if (!popup) {
    popup = document.createElement('div');
    popup.id = 'cart-popup';
    popup.style.position = 'fixed';
    popup.style.top = '20px';
    popup.style.right = '20px';
    popup.style.background = '#ff5722';
    popup.style.color = '#fff';
    popup.style.padding = '1rem 2rem';
    popup.style.borderRadius = '8px';
    popup.style.fontWeight = 'bold';
    popup.style.zIndex = '9999';
    popup.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
    document.body.appendChild(popup);
  }
  popup.textContent = message;
  popup.style.display = 'block';
  setTimeout(() => { popup.style.display = 'none'; }, 1500);
}
}

function sortMenu(menuItems, order) {
  if(order === 'asc') {
    return [...menuItems].sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
  } else if(order === 'desc') {
    return [...menuItems].sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')));
  }
  return menuItems;
}

function filterMenu(menuItems, type) {
  if(type === 'all') return menuItems;
  return menuItems.filter(item => item.type === type);
}

document.addEventListener('DOMContentLoaded', function() {
  // Initial render
  renderMenu(menuData);
  // Controls
  const filterSelect = document.getElementById('filter');
  const sortSelect = document.getElementById('sort');
  function updateMenu() {
    let filtered = filterMenu(menuData, filterSelect.value);
    let sorted = sortMenu(filtered, sortSelect.value);
    renderMenu(sorted);
  }
  filterSelect.addEventListener('change', updateMenu);
  sortSelect.addEventListener('change', updateMenu);

    // Search functionality
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    if (searchForm && searchInput) {
      searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
          renderMenu(menuData);
          return;
        }
        const results = menuData.filter(item =>
          item.name.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query)
        );
        renderMenu(results);
      });
      searchInput.addEventListener('input', function() {
        if (!searchInput.value.trim()) {
          renderMenu(menuData);
        }
      });
    }
});

// Simple cart logic for demo


let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartDisplay() {
  const cartList = document.querySelector('.cart-list');
  const cartTotal = document.getElementById('cart-total');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach((item, idx) => {
      const priceNum = parseInt(item.price.replace(/[^0-9]/g, '')) * item.qty;
      total += priceNum;
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `${item.name} x ${item.qty} - ₹${priceNum} <button data-idx="${idx}" class="remove-item">Remove</button> <button data-idx="${idx}" class="add-item">+</button> <button data-idx="${idx}" class="subtract-item">-</button>`;
      cartList.appendChild(div);
    });
    cartTotal.textContent = `₹${total}`;
    // Add checkout link if cart has items
    let checkoutLink = document.getElementById('checkout-link');
    if (!checkoutLink) {
      checkoutLink = document.createElement('a');
      checkoutLink.id = 'checkout-link';
      checkoutLink.className = 'btn';
      checkoutLink.href = 'checkout.html';
      checkoutLink.textContent = 'Go to Checkout';
      cartList.parentElement.appendChild(checkoutLink);
    }
    checkoutLink.style.display = cart.length ? 'inline-block' : 'none';
}

document.querySelectorAll('.order-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const card = btn.closest('.menu-card');
    const name = card.querySelector('h3').textContent;
    const price = card.querySelector('span').textContent;
    let found = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === name && cart[i].price === price) {
        cart[i].qty += 1;
        found = true;
        break;
      }
    }
    if (!found) {
      cart.push({ name, price, qty: 1 });
    }
    updateCartDisplay();
    saveCart();
  });
});

document.querySelector('.cart-list')?.addEventListener('click', function(e) {
  const idx = e.target.getAttribute('data-idx');
  if(e.target.classList.contains('remove-item')) {
    cart.splice(idx, 1);
    updateCartDisplay();
    saveCart();
  }
  if(e.target.classList.contains('add-item')) {
    cart[idx].qty += 1;
    updateCartDisplay();
    saveCart();
  }
  if(e.target.classList.contains('subtract-item')) {
    cart[idx].qty -= 1;
    if(cart[idx].qty <= 0) cart.splice(idx, 1);
    updateCartDisplay();
    saveCart();
  }
});

document.getElementById('clear-cart')?.addEventListener('click', function() {
  cart = [];
    updateCartDisplay();
    saveCart();
});

// Handle order form submission
const orderForm = document.querySelector('.order-form');
if(orderForm) {
  orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if(cart.length === 0) {
      alert('Please add at least one item to your order.');
      return;
    }
    const name = orderForm.querySelector('input[placeholder="Your Name"]').value;
    const address = orderForm.querySelector('input[placeholder="Address"]').value;
    const phone = orderForm.querySelector('input[placeholder="Phone Number"]').value;
    alert(`Thank you, ${name}! Your order for ${cart.length} item(s) will be delivered to ${address}.`);
    cart = [];
    updateCartDisplay();
    saveCart();
    orderForm.reset();
  });
}
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  cart.forEach((c) => {
    let li = document.createElement("li");
    li.textContent = `${c.item} - ₹${c.price}`;
    cartList.appendChild(li);
  });
  document.getElementById("total").textContent = total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for your order!");
  cart = [];
  total = 0;
  updateCart();
}
