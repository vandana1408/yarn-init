"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
const cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello from the TypeScript backend! I think?');
});
app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});
