const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const path = require("path");


app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "pub/examples.html"));
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

app.listen(port, () => {
	console.log(`Example app is listening on port http://localhost:${port}`);
});