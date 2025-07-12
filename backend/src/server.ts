// src/server.ts
import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from the TypeScript backend!');
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});