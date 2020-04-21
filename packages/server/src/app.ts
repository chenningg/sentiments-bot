import express, { Application, Request, Response, NextFunction } from "express";

// Initialize express server
const app: Application = express();

// ====== Routes ======

// Index
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is a test!");
});

// Stock page
app.get("/stock/:name", (req: Request, res: Response) => {
  res.send(`Finding stock sentiments for ${req.params.name}`);
});

// Listen on port 4000
app.listen(4000, () => {
  console.log("Express server listening on port 4000.");
});
