const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const path = require("path");


app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "pub/examples.html"));
});

app.get("/documentation", (req, res) => {
	res.sendFile(path.join(__dirname, "pub/documentation.html"));
});

app.get("/library.js", (req, res) => {
	res.sendFile(path.join(__dirname, "pub/library.js"));
});

app.get("/examples.js", (req, res) => {
	res.sendFile(path.join(__dirname, "pub/examples.js"));
});

app.get("/examples.css", (req, res) => {
	res.sendFile(path.join(__dirname, "pub/examples.css"));
});

app.get("/documentation.css", (req, res) => {
	res.sendFile(path.join(__dirname, "pub/documentation.css"));
});

app.get("/img/star.png", (req, res) => {
	res.sendFile(path.join(__dirname, "pub/img/star.png"));
});

app.get("/img/tire.png", (req, res) => {
	res.sendFile(path.join(__dirname, "pub/img/tire.png"));
});

app.get("/img/rocket.gif", (req, res) => {
	res.sendFile(path.join(__dirname, "pub/img/rocket.gif"));
});

app.get("/img/github.png", (req, res) => {
	res.sendFile(path.join(__dirname, "pub/img/github.png"));
});

app.listen(port, () => {
	console.log(`Example app is listening on port http://localhost:${port}`);
});