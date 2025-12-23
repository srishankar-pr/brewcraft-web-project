const app = {
    state: {
        user: JSON.parse(localStorage.getItem('brewcraft_user')) || null,
        cart: JSON.parse(localStorage.getItem('brewcraft_cart')) || []
    },

    init() {
        this.updateHeader();
        this.updateCartCount();
    },

    login(user) {
        this.state.user = user;
        localStorage.setItem('brewcraft_user', JSON.stringify(user));
        this.updateHeader();
    },

    logout() {
        this.state.user = null;
        localStorage.removeItem('brewcraft_user');
        this.updateHeader();
        window.location.href = 'index.html';
    },

    addToCart(product, quantity = 1) {
        const existing = this.state.cart.find(item => item.id == product.id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.state.cart.push({ ...product, quantity: quantity });
        }
        this.saveCart();
        this.updateCartCount();
        alert(`${quantity} x ${product.name} added to cart!`);
    },

    removeFromCart(productId) {
        this.state.cart = this.state.cart.filter(item => item.id != productId);
        this.saveCart();
        this.updateCartCount();
    },

    updateQuantity(productId, change) {
        const item = this.state.cart.find(item => item.id == productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                this.saveCart();
                this.updateCartCount();
            }
        }
    },

    clearCart() {
        this.state.cart = [];
        this.saveCart();
        this.updateCartCount();
    },

    saveCart() {
        localStorage.setItem('brewcraft_cart', JSON.stringify(this.state.cart));
    },

    updateHeader() {
        const loginLink = document.querySelector('a[href="login.html"]');
        if (loginLink) {
            if (this.state.user) {
                loginLink.innerHTML = `<i class="fa-solid fa-user-check"></i>`;
                loginLink.href = "#";
                loginLink.onclick = (e) => {
                    e.preventDefault();
                    if (confirm(`Logged in as ${this.state.user.name}. Logout?`)) {
                        this.logout();
                    }
                };
            } else {
                loginLink.innerHTML = `<i class="fa-regular fa-user"></i>`;
                loginLink.href = "login.html";
                loginLink.onclick = null;
            }
        }
    },

    updateCartCount() {
        const count = this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
        const badge = document.querySelector('.cart-count');
        if (badge) badge.textContent = count;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
