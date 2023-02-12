const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const allRoutes = require("./routes/index");
const { connectDB } = require("./database/index");

const app = express();
dotenv.config();

app.use(cors());
app.use("/api/v1/products", allRoutes);

const PORT = process.env.SERVER_PORT || 5001;
const DB_URL = process.env.DB_URL || "";

app.get("/", (request, response) => {
  response.status(200).json({ message: "success", data: "All Data!" });
});

app.listen(PORT, async () => {
  try {
    await connectDB(DB_URL);
    console.log("SERVER_URL: " + "http://127.0.0.1:" + PORT);
  } catch (error) {
    console.log(error);
  }
});
