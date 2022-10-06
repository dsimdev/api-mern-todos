import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import todoRoute from "./routes/todoRoute.js";

const app = express();
dotenv.config();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/todos", todoRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

const PORT = process.env.PORT || 5000;
mongodb ="mongodb+srv://dmndev:030390@cluster0.wqvo2xu.mongodb.net/todos-database?retryWrites=true&w=majority";
mongoose
  .connect(mongodb, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
