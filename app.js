const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("CI/CD is running");
});

app.listen(300, () => {
console.log("server is running on port 3000");
});
