const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const movieRouter = require("./routes/movies");
const listRouter = require("./routes/lists");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // family: 4,
  })
  .then(() => console.log("Successfully connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users",userRouter);
app.use("/api/movies",movieRouter);
app.use("/api/lists", listRouter);


app.listen(8800, () => {
  console.log("Backend is running");
});
