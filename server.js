const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Root path"));
app.use("/api", require("./routes/root"));
app.use("/users", require("./routes/users"));
app.use("/rooms", require("./routes/rooms"));
app.use("/devices", require("./routes/devices"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
