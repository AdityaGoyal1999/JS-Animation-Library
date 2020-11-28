const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const path = require("path");


app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "pub/examples.html"));
});

app.listen(port, () => {
	console.log(`Example app is listening on port http://localhost:${port}`);
});