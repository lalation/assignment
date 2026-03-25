const express = require('express');
const app = express();
const PORT = 3000;
const errorMsg = {};
const status = {};
app.use(express.urlencoded({ extended: true}))
app.get("/api/server/status" , async(req, res) => {
    const query = req.query;
    status.msg ="Server is Up and Ready.";
    res.json(status);
});

app.post("/api/submit-form" , async(req, res) => {
    const body = req.body;
    console.log("Body =="+body);
    const responseObjData = {statusCode: 201, msg:"Cat Form Submission Successful"};
    res.json(responseOnjData)
});

app.get("/hello.api", (req, res) => {
    res.send("Hello World, welcome to JS backend programming!");
});
app.get("/hello.api-json", (req, res) => {
    res.send;({greeting: "Hello World, from backend and server side!"
});
});

app.listen(PORT, () => {
    console.log("hello world API app listening on port "+PORT)
})
