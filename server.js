// import express from "express";
// import mongoose from "mongoose";
// import userRouter from "./routes/userRoute.js";
// import env from 'dotenv'
// import cors from 'cors'
// app.use(cors());
//   env.config();
// const app = express();
// app.use(express.json());
// const dbuser = encodeURIComponent(process.env.DBUSER)
// const dbpass = encodeURIComponent(process.env.DBPASS)
// mongoose.connect(`mongodb://localhost:27017/merncafe`).then(() => {
//   app.listen(8083, () => {
//     console.log("Server started");
//   });  
// });
// mongoose.connect(`mongodb+srv://${dbuser}:${dbpass}@cluster0.yfh1wjc.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
//   app.listen(8083, () => {
//     console.log("Server started");
//   });
// });
// app.use("/api/users", userRouter);

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import cors from "cors"
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

// mongoose.connect(`mongodb://localhost:27017/merncafe`).then(() => {
//   app.listen(8083, () => {
//     console.log("Server started in local");
//   });
// });

mongoose
  .connect(
    `mongodb+srv://${dbuser}:${dbpass}@cluster0.yfh1wjc.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(8083, () => {
      console.log("Server started(Atlas)");
    });
  });

app.use("/api/users", userRouter);