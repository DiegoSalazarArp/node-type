"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // for parsing application/json
app.get('/', (req, res) => {
    console.log('hjasfdf sd');
    res.send('Hello Worasdld!');
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});