import express from "express";
import bodyParser from "body-parser";
import dotEnvExtended from "dotenv-extended";

// Initialize express server, port and environment variables
const app = express();
const config = dotEnvExtended.load();
const port = config.SERVER_PORT || 4000; // Default to port 4000

// Setup middleware to parse POST requests for url html data and JSON
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// ====== Routes ======

// Index and home
app.get("/", (req, res) => {
  res.send("Hello, this is a test!!!");
});

app.get("/home", (req, res) => {
  res.send("Hello, this is a test!!!");
});

// Test
app.get("/api/v1/test", (req, res) => {
  res.send({
    weather: "rainy.",
  });
});

// Stock page
app.get("/stock/:name", (req, res) => {
  res.send(`Finding stock sentiments for ${req.params.name}`);
});

// Start server, listening on provided port (default 4000)
app.listen(port, () => {
  console.log(`Express server listening on port ${port}.`);
});
