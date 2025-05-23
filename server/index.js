const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.send("hello from our api");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
