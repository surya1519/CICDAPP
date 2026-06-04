const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("I am running in Container nowD");
});

app.listen(3000, "0.0.0.0", () => {
console.log("I am trying to run the CI/CD app from EC2 servcer");
});
