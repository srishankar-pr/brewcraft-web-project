document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkoutBtn');

    function renderCart() {
        const cart = app.state.cart;
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="text-center" style="padding: 3rem;">
                    <i class="fa-solid fa-basket-shopping" style="font-size: 3rem; color: #ddd; margin-bottom: 1rem;"></i>
                    <h3>Your cart is empty</h3>
                    <p style="color: var(--color-text-muted); margin-bottom: 2rem;">Looks like you haven't added any coffee yet.</p>
                    <a href="shop.html" class="btn btn-primary">Start Shopping</a>
                </div>
            `;
            if (checkoutBtn) checkoutBtn.style.display = 'none';
            updateSummary(0);
            return;
        }

        if (checkoutBtn) checkoutBtn.style.display = 'block';

        let total = 0;

        cart.forEach(item => {
            const itemTotal = parseFloat(item.price) * item.quantity;
            total += itemTotal;

            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item fade-in';
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=100&q=80'">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">$${parseFloat(item.price).toFixed(2)}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-selector" style="margin: 0; transform: scale(0.9);">
                        <button class="qty-btn" onclick="updateCartItem('${item.id}', -1)">-</button>
                        <input type="text" class="qty-input" value="${item.quantity}" readonly>
                        <button class="qty-btn" onclick="updateCartItem('${item.id}', 1)">+</button>
                    </div>
                </div>
                <div class="cart-item-total">$${itemTotal.toFixed(2)}</div>
                <button class="remove-btn" onclick="removeCartItem('${item.id}')"><i class="fa-solid fa-trash"></i></button>
            `;
            cartItemsContainer.appendChild(itemEl);
        });

        updateSummary(total);
    }

    function updateSummary(total) {
        if (subtotalEl) subtotalEl.textContent = `$${total.toFixed(2)}`;
        if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
    }

    // Expose helpers to window for onclick handlers
    window.updateCartItem = (id, change) => {
        app.updateQuantity(id, change);
        renderCart();
    };

    window.removeCartItem = (id) => {
        if (confirm('Remove this item from cart?')) {
            app.removeFromCart(id);
            renderCart();
        }
    };

    renderCart();
});
