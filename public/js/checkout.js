document.addEventListener('DOMContentLoaded', () => {
    // Check if cart is empty, if so redirect
    if (app.state.cart.length === 0) {
        window.location.href = 'shop.html';
        return;
    }

    // Prefill if logged in
    if (app.state.user) {
        document.getElementById('email').value = app.state.user.email;
        document.getElementById('fullname').value = app.state.user.name;
    }

    // Calculate Total for Display
    const total = app.state.cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
    document.getElementById('checkoutTotal').textContent = `₹${total.toFixed(2)}`;

    const form = document.getElementById('checkoutForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const orderData = {
            id: Date.now(),
            date: new Date().toISOString().split('T')[0],
            customer: {
                name: document.getElementById('fullname').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                zip: document.getElementById('zip').value
            },
            items: app.state.cart,
            total: total.toFixed(2)
        };

        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Processing...';
        btn.disabled = true;

        const result = await api.submitOrder(orderData);

        if (result.success) {
            app.clearCart();
            document.body.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; text-align: center; background: var(--color-bg-light);">
                    <i class="fa-solid fa-circle-check" style="font-size: 4rem; color: var(--color-success); margin-bottom: 1rem;"></i>
                    <h1 style="font-family: var(--font-heading);">Order Placed Successfully!</h1>
                    <p style="margin-bottom: 2rem;">Thank you for your purchase. Your order ID is #${orderData.id}.</p>
                    <a href="index.html" class="btn btn-primary">Return Home</a>
                </div>
            `;
        } else {
            alert('Failed to place order: ' + (result.error || 'Unknown error'));
            btn.textContent = originalText;
            btn.disabled = false;
        }
    });
});
