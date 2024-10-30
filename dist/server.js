"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    //home
    if (req.url === "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write("<h1>Home</h1>");
        res.end();
        return;
    }
    //about
    if (req.url === "/about") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write("<h1>About</h1>");
        res.end();
        return;
    }
    //my account
    if (req.url === "/my-account") {
        res.writeHead(403, { "Content-type": "text/plain" });
        res.write("You have no access to this page");
        res.end();
        return;
    }
    //any other url
    res.writeHead(404, { "Content-type": "text/plain" });
    res.write("Page not found");
    res.end();
    //Set PORT
    const PORT = 5000;
    server.listen(PORT, () => {
        console.log(`Server is running on prot ${PORT}`);
    });
});
