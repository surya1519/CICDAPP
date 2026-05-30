const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("CI/CD");
});

app.listen(3000, "0.0.0.0", () => {
console.log("server is running on port 3000");
});
