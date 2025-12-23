# BrewCraft - Node.js Server

# BrewCraft - Premium Coffee Experience

BrewCraft is a modern, responsive e-commerce web application designed for coffee enthusiasts. It allows users to browse premium coffee blends, manage a shopping cart, and securely checkout. This project demonstrates a full-stack implementation using a Node.js backend and a vanilla HTML/CSS/JS frontend.

## ✨ Key Features

- **Product Catalog**: Browse a variety of coffee blends with detailed descriptions and pricing.
- **User Accounts**: Login system using file-based storage (`users.txt`) for credential verification.
- **Shopping Cart**: Fully functional cart with add/remove and quantity adjustment capabilities.
- **Secure Checkout**: Order placement system with form validation (including strict 10-digit phone number check).
- **Contact Form**: Users can submit inquiries which are saved to the server.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Data Persistence**: All data (orders, users, messages) is stored in persistent text files on the server.

## 🚀 How to Start the Server

Since PowerShell execution policies restrict running scripts directly on some Windows machines, use one of the following methods:

### Method 1: The "Safe" Way (Recommended)
This bypasses PowerShell restrictions safely.
1. Open your terminal in the project folder.
2. Run this command:
   ```cmd
   node server.js
   ```
3. Open your browser to: **http://localhost:3000**

### Method 2: Using NPM (If Method 1 fails)
If you prefer using npm, type this into PowerShell:
```powershell
cmd /c "npm start"
```

---

## 🛑 How to Stop the Server

To shut down the server when you are done:

### Method 1: Standard Stop
1. Go to the terminal window where the server is running.
2. Press **`Ctrl + C`** on your keyboard.
3. If asked "Terminate batch job (Y/N)?", type **`Y`** and press Enter.

### Method 2: Force Stop (If stuck)
If the terminal is frozen or `Ctrl + C` isn't working:
1. Open a **new** terminal window.
2. Run this command to kill the Node.js process:
   ```cmd
   taskkill /F /IM node.exe
   ```

---

## 📂 Project Structure

- **`server.js`**: The core backend application logic (replaces `server.py`).
- **`public/`**: Frontend files (HTML, CSS, JS, Images).
- **`data/`**: Text files storing application data.
    - `products.txt`: Product catalog.
    - `users.txt`: User accounts (Included for evaluation).
    - `orders.txt`: Order history (Included for evaluation).
    - `contact.txt`: Contact form messages (Included for evaluation).

## ⚠️ Git Note
`node_modules` are excluded from Git to keep the repository clean. Run `npm install` if you clone this repo.
