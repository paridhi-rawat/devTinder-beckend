const express = require("express");
const app = express();
const {adminAuth} = require("./middlewares/auth")
app.use("/admin",adminAuth)

app.get("/admin/getAllData",(req, res) => {
 res.send("get from the server!!");
});

app.post("/admin/deleteAllData",(req, res) => {
 res.send("test post successfully from the server!!");
});

app.listen(3000, () => {
 console.log("Server is successfully listening on port 3000");
});
