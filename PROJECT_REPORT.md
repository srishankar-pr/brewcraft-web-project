# Project Report: BrewCraft E-Commerce Application

## 1. Abstract
BrewCraft is a full-stack web application designed to simulate a premium coffee e-commerce experience. The project demonstrates the implementation of a dynamic website using a Node.js backend to handle user authentication, product management, and order processing, coupled with a responsive HTML/CSS/JavaScript frontend.

## 2. Objectives
- To develop a functional e-commerce platform for browsing and purchasing coffee products.
- To implement a backend server using the core principles of RESTful APIs.
- To handle data persistence using file-based storage (simulation of a database).
- To create a responsive and reliable user interface with form validation.

## 3. Technology Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript.
- **Backend**: Node.js, Express.js.
- **Deployment**: Configured for Netlify (Serverless Functions).
- **Data Storage**: Local File System (JSON/Text files).
- **Version Control**: Git & GitHub.

## 4. System Architecture
The application follows a Client-Server architecture:
1.  **Client (Frontend)**: Fetches data via asynchronous fetch requests to the API. Handles the shopping cart state using local storage and in-memory variables.
2.  **Server (Backend)**: An Express.js server listening on port 3000. It routes API requests (`/api/products`, `/api/login`) to specific handlers.
3.  **Data Layer**: Instead of a traditional SQL/NoSQL database, this project uses structured text files (`users.txt`, `products.txt`) to demonstrate file I/O operations in Node.js.

## 5. Key Features
### 5.1 User Authentication
- **Login System**: Verifies credentials against `users.txt`.
- **Session Management**: Frontend maintains user state upon successful login.

### 5.2 Product Catalog
- **Dynamic Loading**: Product data is fetched from the server (`/api/products`) and rendered dynamically on the Shop page.
- **Categorization**: Products support specific categories (Coffee Beans, Accessories).

### 5.3 Shopping Cart & Checkout
- **Cart Management**: Users can add items, view the cart, and adjust quantities.
- **Calculations**: Automatic calculation of subtotals and grand totals.
- **Validation**: The checkout form uses strict Regex validation (`[0-9]{10}`) to ensure valid contact information.

### 5.4 Order Processing
- **Order Persistence**: Valid orders are appended to `data/orders.txt` with a timestamp and unique ID.
- **API Endpoint**: `POST /api/orders` handles the reception and storage of order JSON data.

## 6. Implementation Details
### 6.1 Server Migration
Initially designed in Python, the backend was migrated to Node.js to leverage the non-blocking I/O model and the rich ecosystem of NPM packages (Express, CORS).

### 6.2 File Handling
Data is stored in pipe-separated values (`|`) within text files. The server reads these files using Node's `fs` module, parses the strings, and converts them into JSON objects for the frontend.

### 6.3 Security Considerations
- **Environment Isolation**: Usage of `dotenv` (planned) and `.gitignore` to protect sensitive files.
- **Input Sanitization**: Basic checks to prevent malformed data from corrupting storage files.

## 7. Challenges & Solutions
- **Challenge**: PowerShell Execution Policies blocked NPM scripts on the development machine.
- **Solution**: Implemented a workaround using `cmd /c` to execute NPM commands, ensuring the development environment remained secure but functional.
- **Challenge**: Hosting persistent files on Serverless platforms (Netlify).
- **Solution**: Adapted the application to run as a Serverless Function using `serverless-http` for demonstration purposes, while acknowledging the ephemeral nature of file storage on free-tier hosting.

## 8. Future Enhancements
- Integration of a cloud database (MongoDB/Atlas) for robust data persistence.
- Implementation of JWT (JSON Web Tokens) for secure, stateless authentication.
- Payment gateway integration (Stripe/PayPal) for real transactions.

## 9. Conclusion
BrewCraft successfully demonstrates the lifecycle of a web application from design to deployment. It fulfills the functional requirements of an e-commerce site while showcasing proficiency in modern web development technologies.
