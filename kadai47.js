const express = require("express");
const app = express();
const PORT = 5000;
app.use(express.json());

// 
const items = ["apple", "banana", "orange"];

// 45
app.get("/api/items", (req, res) => {
  res.json(items);
});

// 47
app.post("/api/items", (req, res) => {
  const newItem = req.body.item;
  if(newItem) {
    items.push(newItem);
    res.json(items);
  } 
  else {
    return res.status(400).json({ message: "item is required" });
  }
});

// ------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
