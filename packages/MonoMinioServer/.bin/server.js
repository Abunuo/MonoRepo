"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("./middleware/cors"));
const file_1 = __importDefault(require("./routes/file"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.default)());
app.use(cors_1.default);
app.use(file_1.default);
app.get("*", (req, res) => {
    res.end("not found");
});
const PORT = 9001;
app.listen(PORT, () => {
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
});
