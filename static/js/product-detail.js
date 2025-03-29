document.addEventListener('DOMContentLoaded', () => {
    // Product image gallery
    const mainImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update main image
            const imageUrl = this.getAttribute('data-image');
            mainImage.src = imageUrl;
            
            // Update active thumbnail
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Quantity selector
    const quantityInput = document.getElementById('quantity');
    const minusBtn = document.getElementById('quantity-minus');
    const plusBtn = document.getElementById('quantity-plus');
    
    if (minusBtn && plusBtn && quantityInput) {
        minusBtn.addEventListener('click', () => {
            const value = Number.parseInt(quantityInput.value);
            if (value > 1) {
                quantityInput.value = value - 1;
            }
        });
        
        plusBtn.addEventListener('click', () => {
            const value = Number.parseInt(quantityInput.value);
            quantityInput.value = value + 1;
        });
        
        quantityInput.addEventListener('change', function() {
            const value = Number.parseInt(this.value);
            if (value < 1) {
                this.value = 1;
            }
        });
    }
    
    // Product tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));\
            tabContents.forEach(content => content.classList.remove('

