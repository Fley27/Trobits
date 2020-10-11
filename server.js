const express = require("express");
const path = require("path");
const app = express();
app.use(express.json({ extended: false }));

let port = process.env.PORT || 5000; 


// use the route
app.use(express.static('client/build'));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log(`Server runing on port ${port}`));