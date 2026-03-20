import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authroutes.js";
import connectDB from "./config/mongodb.js";

// import userRouter from "./routes/userroutes.js";

const app = express();


const PORT = process.env.PORT || 3000;

connectDB();
// const allowOrigins=["http://localhost:5173"];


app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use('/api/auth', authRouter);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

