// src/server.ts
import express from 'express';

const app = express();
const port = 5000;

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from the TypeScript backend! I think?');
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});