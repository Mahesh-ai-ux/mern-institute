
require("dotenv").config();
const express=require("express");
const cors=require("cors");
const connectDB=require("./config/db");
const app=express();

app.use(cors());
app.use(express.json());

connectDB(process.env.MONGO_URI);

app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/leads", require("./routes/leads"));

app.listen(process.env.PORT, ()=>console.log("Backend running on port", process.env.PORT));
