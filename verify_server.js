const http = require('http');

// Helper for HTTP requests
function request(method, path, data = null) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: path,
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const req = http.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(body);
                    resolve({ status: res.statusCode, body: parsed });
                } catch (e) {
                    resolve({ status: res.statusCode, body });
                }
            });
        });

        req.on('error', (e) => reject(e));

        if (data) {
            req.write(JSON.stringify(data));
        }
        req.end();
    });
}

// Tests
async function runTests() {
    console.log('Starting Verification...\n');

    // 1. GET /api/products
    try {
        const products = await request('GET', '/api/products');
        if (products.status === 200 && Array.isArray(products.body) && products.body.length > 0) {
            console.log('✅ GET /api/products: Success');
        } else {
            console.error('❌ GET /api/products: Failed', products);
        }
    } catch (e) {
        console.error('❌ GET /api/products: Error', e.message);
    }

    // 2. POST /api/login (Failure)
    try {
        const loginFail = await request('POST', '/api/login', { email: 'bad@test.com', password: 'wrong' });
        if (loginFail.status === 401) {
            console.log('✅ POST /api/login (Invalid): Success (401 received)');
        } else {
            console.error('❌ POST /api/login (Invalid): Failed', loginFail);
        }
    } catch (e) {
        console.error('❌ POST /api/login: Error', e.message);
    }

    // 3. POST /api/contacts
    try {
        const contact = await request('POST', '/api/contact', {
            name: 'Test Bot',
            email: 'test@bot.com',
            date: new Date().toISOString(),
            message: 'Automated test message'
        });
        if (contact.status === 200 && contact.body.success) {
            console.log('✅ POST /api/contact: Success');
        } else {
            console.error('❌ POST /api/contact: Failed', contact);
        }
    } catch (e) {
        console.error('❌ POST /api/contact: Error', e.message);
    }

    console.log('\nVerification Complete.');
}

// Wait for server to potentially start
setTimeout(runTests, 2000);
