import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import weatherRouter from "./routes/routs.js";

const app = express();
dotenv.config();
app.use(cors({ origin: process.env.CLIENT_URL }));
console.log("process.env.CLIENT_URL",process.env.CLIENT_URL);


const port = process.env.PORT || 3000;

app.use("/", weatherRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
