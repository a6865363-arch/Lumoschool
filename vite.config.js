import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        {
            name: 'terminal-logger',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    if (req.url === '/api/log' && req.method === 'POST') {
                        let body = '';
                        req.on('data', chunk => {
                            body += chunk.toString();
                        });
                        req.on('end', () => {
                            try {
                                const data = JSON.parse(body);
                                // Terminalga yashil rangda chiqarish
                                console.log('\x1b[32m%s\x1b[0m', `>>> ${data.message}`);
                                res.setHeader('Content-Type', 'application/json');
                                res.end(JSON.stringify({ status: 'ok' }));
                            } catch (e) {
                                res.statusCode = 400;
                                res.end('Invalid JSON');
                            }
                        });
                    } else {
                        next();
                    }
                });
            },
        },
    ],
});
