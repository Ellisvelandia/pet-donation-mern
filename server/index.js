const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(morgan("tiny"));

app.use(cors());

app.use(express.json());

require("dotenv").config();

const categoryRoutes = require("./routes/categoryRoute");
const petRoute = require("./routes/petRoute");
const adoptionRoutes = require("./routes/adoptionRoute");

app.use("/public", express.static(path.join(__dirname, "public")));

require("./connection/conn");

mongoose.set("strictQuery", false);

app.use("/woof/category", categoryRoutes);
app.use("/woof/pets", petRoute);
app.use("/woof/adoption", adoptionRoutes);

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
