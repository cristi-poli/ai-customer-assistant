const http = require("http");
const fs = require("fs");
const path = require("path");

const analyzeCustomer = (customer) => {

    const { sentiment } = customer;

    if (sentiment === "angry") {
        return {
            priority: "HIGH",
            action: "Contact the customer immediately."
        };
    } else if (sentiment === "neutral") {
        return {
            priority: "NORMAL",
            action: "Review the customer request."
        };
    } else {
        return {
            priority: "LOW",
            action: "No urgent action needed."
        };
    }
};

const server = http.createServer((req, res) => {

    // Pagina principala
    if (req.method === "GET" && req.url === "/") {

        const filePath = path.join(__dirname, "index.html");

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Server error");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);
        });

        return;
    }

    // JavaScript-ul paginii
    if (req.method === "GET" && req.url === "/script.js") {

        const filePath = path.join(__dirname, "script.js");

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Server error");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/javascript"
            });

            res.end(data);
        });

        return;
    }

    // CSS-ul paginii
    if (req.method === "GET" && req.url === "/style.css") {

        const filePath = path.join(__dirname, "style.css");

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Server error");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/css"
            });

            res.end(data);
        });

        return;
    }

    // API pentru analiza clientului
    if (req.method === "POST" && req.url === "/analyze") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            const customer = JSON.parse(body);

            console.log("Customer received:", customer);

            const result = analyzeCustomer(customer);

            res.writeHead(200, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify(result));
        });

        return;
    }

    // Orice alta adresa
    res.writeHead(404);
    res.end("Not found");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});