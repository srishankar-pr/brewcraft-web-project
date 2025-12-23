document.addEventListener('DOMContentLoaded', async () => {
    const productGrid = document.querySelector('.product-grid');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    const resultCount = document.getElementById('resultCount');

    // Loader
    productGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 4rem;">Loading products...</div>';

    // Fetch Data
    let allProducts = await api.getProducts();

    // Parse URL params for initial category
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('category');
    if (initialCategory) {
        if (categoryFilter) categoryFilter.value = initialCategory;
    }

    // Render Function
    function renderAndFilter() {
        let filtered = [...allProducts];

        // Filter by Category
        const cat = categoryFilter ? categoryFilter.value : 'All';
        if (cat !== 'All') {
            filtered = filtered.filter(p => p.category.includes(cat) || (cat === 'Accessories' && (p.category.includes('Mug') || p.category.includes('Tumbler'))));
        }

        // Sort
        const sort = sortFilter ? sortFilter.value : 'default';
        if (sort === 'price-low') {
            filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (sort === 'price-high') {
            filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        }

        // Update UI
        if (resultCount) resultCount.textContent = `${filtered.length} products found`;

        productGrid.innerHTML = '';
        if (filtered.length === 0) {
            productGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--color-text-muted);">No products found matching your selection.</div>';
            return;
        }

        filtered.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card fade-in';
            card.innerHTML = `
                <div class="product-image">
                    <img src="${encodeURI(product.image)}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80'">
                    <button class="btn-icon add-btn" onclick="app.addToCart({id: '${product.id}', name: '${product.name}', price: '${product.price}', image: '${encodeURI(product.image)}'})">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div class="product-info">
                    <div class="product-cat">${product.category}</div>
                    <a href="product.html?id=${product.id}"><h3 class="product-title">${product.name}</h3></a>
                    <div class="product-price">₹${parseFloat(product.price).toFixed(2)}</div>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    // Event Listeners
    if (categoryFilter) categoryFilter.addEventListener('change', renderAndFilter);
    if (sortFilter) sortFilter.addEventListener('change', renderAndFilter);

    // Initial Render
    renderAndFilter();
});
