const express = require("express");
const app = express();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("form_widget.db");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use("/widgets", express.static(path.join(__dirname, "widgets")));
// API endpoints
app.post("/widgets", (req, res) => {
  const uniqueID = generateUniqueID();
  const widgetData = req.body;

  db.run(
    "INSERT INTO widgets (id, data) VALUES (?, ?)",
    [uniqueID, JSON.stringify(widgetData)],
    (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to save data" });
      }
      // Add background task to message broker
      addBackgroundTaskToBroker(uniqueID);
      res.status(201).json({ id: uniqueID });
    }
  );
});

app.get("/widgets/:id", (req, res) => {
  const widgetID = req.params.id;

  db.get("SELECT data FROM widgets WHERE id = ?", [widgetID], (err, row) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch data" });
    }

    if (!row) {
      return res.status(404).json({ error: "Widget not found" });
    }

    const widgetData = JSON.parse(row.data);
    res.json(widgetData);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function generateUniqueID() {
  return uuidv4();
}

function addBackgroundTaskToBroker(uniqueID) {
  // toDo: Add broker implementation
}
