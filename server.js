const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_DIR = path.join(__dirname, 'data');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Helper function to safe-read files
const readFileLines = (filename, callback) => {
    const filePath = path.join(DATA_DIR, filename);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return callback(err, null);
        // Split by newline and filter empty lines
        const lines = data.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        callback(null, lines);
    });
};

// API Routes



// POST /api/login
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    readFileLines('users.txt', (err, lines) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Server error' });
        }

        let userFound = null;
        for (const line of lines) {
            const parts = line.split('|');
            // email|password|name
            if (parts.length >= 3) {
                if (parts[0] === email && parts[1] === password) {
                    userFound = { email: parts[0], name: parts[2] };
                    break;
                }
            }
        }

        if (userFound) {
            res.json({ success: true, user: userFound });
        } else {
            res.status(401).json({ success: false, error: 'Invalid credentials' });
        }
    });
});

// POST /api/orders
app.post('/api/orders', (req, res) => {
    const data = req.body;
    // id|date|customer_email|total|items_json

    try {
        const itemsJson = JSON.stringify(data.items);
        const customer = data.customer || {};
        const email = customer.email || '';

        const line = `${data.id}|${data.date}|${email}|${data.total}|${itemsJson}\n`;

        fs.appendFile(path.join(DATA_DIR, 'orders.txt'), line, 'utf8', (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to save order' });
            }
            res.json({ success: true });
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Error processing order' });
    }
});

// POST /api/contact
app.post('/api/contact', (req, res) => {
    const data = req.body;
    // name|email|date|message

    try {
        const msg = (data.message || '').replace(/\n/g, ' ');
        const line = `${data.name}|${data.email}|${data.date}|${msg}\n`;

        fs.appendFile(path.join(DATA_DIR, 'contact.txt'), line, 'utf8', (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to save message' });
            }
            res.json({ success: true });
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Error processing contact form' });
    }
});

// Export for Netlify
module.exports = app;

// Start Server locally (if not imported)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Node.js server running at http://localhost:${PORT}`);
    });
}
