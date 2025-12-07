const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());//jsonを受け取るための設定

// 41
app.get("/", (req, res) => {
  res.send("Hello, API!");
});

// 42,43
app.get("/api/greet", (req, res) => {
  const name = req.query.name;

  if(name) {
    res.json({ message: `Hello, ${name}!` });
  } else {
    res.json({ message: "Hello, nanashi!" });
  }
});

// 44
app.post("/api/echo", (req, res) => {
    const data = req.body;
    res.json(data);
});


const items = ["apple", "banana", "orange"];
// 45
app.get("/api/items", (req, res) => {
  res.json(items);
});

// 46
// :id はURLパラメータ
app.get("/api/items/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = items[id];
  if (item) {
    res.json({ id:id, name:item });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// 47
app.post("/api/items", (req, res) => {
  const newItem = req.body.item;

  if (!newItem) {
    return res.status(400).json({ message: "item is required" });
  }

  items.push(newItem);
  res.json(items);
});

// 48
app.delete("/api/items/:id", (req, res) => {
  const id = Number(req.params.id);
    if (id >= 0 && id < items.length) {
        items.splice(id, 1);
    }else {
        return res.status(404).json({ message: "Item not found" });
    }
    res.json(items);
});

// ------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
