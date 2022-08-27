const express = require("express");
const router = express.Router();
// let database = [
//   { id: 1, name: "amrez", email: "test@example.com", age: 18 },
//   { id: 2, name: "amrez", email: "test@example.com", age: 15 },
//   { id: 3, name: "amsheel", email: "test@example.com", age: 15 },
//   { id: 4, name: "ameela", email: "test@example.com", age: 15 },
//   { id: 5, name: "aman", email: "test@example.com", age: 15 },
// ];
let database = [];
// const user = database.find((user) => user.id === 2);
// user.name = "default";

// database.splice(3, 4);

router.get("/crud", (req, res) => {
  res.send(database);
});

router.post("/crud", (req, res) => {
  database.push(req.body);
  res.send("published Item");
  console.log(database);
});

router.patch("/crud/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  const user = database.find((user) => user.id == id);

  if (name) user.name = name;

  res.status(200).send("updated Item");
  console.log(database);
});

router.delete("/crud/:id", (req, res) => {
  const { id } = req.params;
  database = database.filter((user) => user.id != id);
  res.send(`User ${id} deleted successfully`);
  console.log(database);
});

module.exports = router;
