const API_BASE = '/api';

const api = {
    async login(email, password) {
        try {
            const response = await fetch(`${API_BASE}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            return await response.json();
        } catch (error) {
            console.error('Login failed:', error);
            return { success: false, error: 'Network error' };
        }
    },

    async getProducts() {
        try {
            const response = await fetch(`${API_BASE}/products`);
            return await response.json();
        } catch (error) {
            console.error('Fetch products failed:', error);
            return [];
        }
    },

    async submitOrder(orderData) {
        try {
            const response = await fetch(`${API_BASE}/orders`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderData)
            });
            return await response.json();
        } catch (error) {
            console.error('Order submission failed:', error);
            return { success: false, error: 'Network error' };
        }
    },

    async submitContact(contactData) {
        try {
            const response = await fetch(`${API_BASE}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contactData)
            });
            return await response.json();
        } catch (error) {
            console.error('Contact submission failed:', error);
            return { success: false, error: 'Network error' };
        }
    }
};

window.api = api;
