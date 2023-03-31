const express = require("express");
const PORT = process.env.PORT || 4001;
// const cors = require("cors");

const app = express();
// app.use(cors());

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server ^-^ ~" });
  });
  
app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});