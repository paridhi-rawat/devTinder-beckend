const express = require("express");
const app = express();

app.get("/test",(req, res) => {
 res.send("get from the server!!");
});

app.post("/test",(req, res) => {
 res.send("test post successfully from the server!!");
});

app.delete("/test",(req, res) => {
 res.send("test deleted from the server!!");
});

app.use("/test",(req, res) => {
 res.send("test from the server!!");
});

app.use((req, res) => {
 res.send("Namaste!!");
});

app.listen(3000, () => {
 console.log("Server is successfully listening on port 3000");
});
