import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors("*"));

app.get("/", (request, response) => {
  console.log(response);
  return response.status(234).send("welcome to MERN");
});
app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to DB");
    app.listen(PORT, () => {
      console.log(`app is running to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
