const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const userRoutes=require("./routes/userRoutes")
// backend/index.js or app.js


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use("/api", authRoutes);
app.use("/api/users", userRoutes);
// app.use(cors({
//   origin: "https://skillbarter-beta.vercel.app", // ✅ tumhara frontend domain
//   credentials: true
// }));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server connected on port", port);
});
