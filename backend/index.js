const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const dns = require("dns");
const authRoutes = require("./api/authRoutes");
const gastosRoutes = require("./api/gastosRoutes");

dotenv.config();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();
app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error("Missing MONGO_URI in .env");
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => {
    console.error("MongoDB connection error:", error.message || error);
    process.exit(1);
  });

app.use("/api/auth", authRoutes);
app.use("/api/gastos", gastosRoutes);

app.get("/", (req, res) => {
  res.send({ message: "Backend API is running" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
