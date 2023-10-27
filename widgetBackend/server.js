const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/widgets", (req, res) => {
  const data = req.body;
  res.json({ message: "Data received and processed successfully", data });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
