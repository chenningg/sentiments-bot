import express from "express";
import bodyParser from "body-parser";
import dotEnvExtended from "dotenv-extended";
import mongoose from "mongoose"; // Note that mongoose is a singleton object, so all files can access it by importing it directly

import router from "./routes/api";

// Initialize express server, port, routes and environment variables
const app = express();
const config = dotEnvExtended.load();
const port = config.PORT || 4000;

// Initialize mongoDB connection
mongoose.connect(config.MONGO_HOST);
mongoose.Promise = global.Promise; // Make mongoose promise same as javascript one

// Setup middleware
app.use(bodyParser.json()); // Parse JSON requests in body
app.use("/api/v1", router);

// Start server, listening on provided port (default 4000)
app.listen(port, () => {
  console.log(`Express server listening on port ${port}.`);
});
