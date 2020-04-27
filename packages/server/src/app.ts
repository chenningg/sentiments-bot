import express from "express";
import bodyParser from "body-parser";
import dotEnvExtended from "dotenv-extended";
import mongoose from "mongoose";

import router from "./routes/v1/api";

// Initialize express server, port, routes and environment variables
const app = express();
const config = dotEnvExtended.load();

const port = config.PORT || 4000; // Default to port 4000

// Initialize mongoDB connection
// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://atlas:<password>@sentiments-bot-rb8cl.gcp.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// Setup middleware
app.use(bodyParser.json()); // Parse JSON requests in body
app.use("/api/v1", router);

// Start server, listening on provided port (default 4000)
app.listen(port, () => {
  console.log(`Express server listening on port ${port}.`);
});
