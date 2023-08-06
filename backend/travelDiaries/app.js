import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";
import cors from "cors";

const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);

// connections
const uri = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.qye7ogy.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(uri)
  .then(() =>
    app.listen(3001, () =>
      console.log("Connection Succesfull  & Listening to localhost Port 3001")
    )
  )
  .catch((err) => console.log(err));
