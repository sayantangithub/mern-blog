import "../env.js";
import express from "express";
import { connectToMongoose } from "./mongoose.config.js";

const app = express();
app.listen("3000", () => {
  console.log("Server is running on 3000");
  connectToMongoose();
});
