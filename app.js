const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("CI/CD is running. I am running it. ");
});

app.listen(3000, "0.0.0.0", () => {
console.log("server is running on port 3000");
});
