const express = require("express");
const app = express();
const PORT = 5001;

app.get("/", (req, res) => {
    res.send("Hello Express");
});

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});
