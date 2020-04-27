import express from "express";

// Set up router for express to route requests
const router = express.Router();

// ============== API routes ==============

// Get list of users from database
router.get("/users", (req, res) => {
  console.log(req.body);
  res.send({ type: "GET", data: "/users" });
});

// Add a new user to the database
router.post("/users", (req, res) => {
  console.log(req.body);
  res.send({ type: "POST", data: "/users" });
});

// Update a user in the database
router.put("/users/:id", (req, res) => {
  console.log(req.body);
});

// Delete a user from the database
router.delete("/users/:id", (req, res) => {
  console.log(req.body);
});

// Get a list of all stock's data
router.get("/stocks", (req, res) => {
  console.log(req.body);
});

// Get a stock's data
router.get("/stocks/:id", (req, res) => {
  console.log(req.body);
});

// Export router
export default router;
