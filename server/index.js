const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const categoryRoutes = require("./routes/categoryRoute");

require("dotenv").config();
require("./connection/conn");

mongoose.set("strictQuery", false);
app.use(cors());
app.use(express.json());

app.use("/woof/category", categoryRoutes);

const port = 4000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Backend is running on PORT ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
