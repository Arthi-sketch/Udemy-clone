const morgan = require("morgan");
require("dotenv").config();
import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import mongoose from "mongoose";

//express app
const app = express();

//db
// mongoose.connect("mongodb://localhost:27017/udemy")
// .then(()=> console.log("**DB Connection established**"))
// .catch((e)=>console.log("error__", e));

//middle wares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
readdirSync("./routes").map(
  (
    r //executes all the files under the routes folder
  ) => {
    app.use("/api", require(`./routes/${r}`));
  }
);

//port
app.listen(process.env.PORT || 8000, () => {
  console.log("server up...");
});
