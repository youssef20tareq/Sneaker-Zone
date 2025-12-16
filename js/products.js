
function filterProducts(brand) {
    // 1. هات كل الكروت (المنتجات)
    const allProducts = document.querySelectorAll('.card');

    // 2. لف عليهم واحد واحد
    allProducts.forEach(product => {
        // لو مختارين "الكل" اظهر كله
        if (brand === 'all') {
            product.style.display = 'block';
        } else {
            // لو المنتج واخد كلاس (nike أو adidas) زي اللي دوسنا عليه، اظهره
            if (product.classList.contains(brand)) {
                product.style.display = 'block';
            } else {
                // غير كدة اخفيه
                product.style.display = 'none';
            }
        }
    });
}