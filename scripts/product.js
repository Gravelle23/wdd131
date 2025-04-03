const productArray = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
    { id: 4, name: "Product D" },
];

document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('product');

    productArray.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    const reviewCount = localStorage.getItem('reviewCount') || 0;
    localStorage.setItem('reviewCount', reviewCount);
});

document.getElementById('review-form').onsubmit = function() {
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
};
