// reviews.js
// Display positive customer reviews

const reviews = [
    {
        name: "Amit Sharma",
        text: "Amazing food and super fast delivery! Highly recommended.",
        rating: 5
    },
    {
        name: "Priya Singh",
        text: "The sushi platter was fresh and delicious. Will order again!",
        rating: 5
    },
    {
        name: "Rahul Verma",
        text: "Great variety in the menu and easy to use website.",
        rating: 4
    },
    {
        name: "Sneha Patel",
        text: "Loved the paneer pizza. The crust was perfect!",
        rating: 5
    },
    {
        name: "Vikram Joshi",
        text: "Customer service is excellent. Quick response and helpful staff.",
        rating: 5
    },
    {
        name: "Meera Nair",
        text: "Burger was juicy and fries were crispy. My kids loved it!",
        rating: 4
    },
    {
        name: "Arjun Rao",
        text: "Easy checkout and prompt delivery. Will recommend to friends.",
        rating: 5
    },
    {
        name: "Riya Kapoor",
        text: "The feedback option is great. I felt heard as a customer.",
        rating: 5
    },
    {
        name: "Suresh Kumar",
        text: "Tandoori pizza was spicy and flavorful. Perfect for Indian taste!",
        rating: 5
    },
    {
        name: "Neha Gupta",
        text: "Loved the filter and sort options. Made ordering so easy!",
        rating: 5
    }
];

function renderReviews() {
    const reviewsList = document.querySelector('.reviews-list');
    reviews.forEach(review => {
        const div = document.createElement('div');
        div.className = 'review-card';
        div.innerHTML = `
            <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            <p class="review-text">${review.text}</p>
            <div class="review-name">- ${review.name}</div>
        `;
        reviewsList.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', renderReviews);
