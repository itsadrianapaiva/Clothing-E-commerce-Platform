//entry point to initialize middleware, routes and connection services

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");
require("dotenv").config();
const adminProductsRouter = require("./routes/admin/products-routes");

//create a database connection -> you can also create a separate file for this and then import/use that file here

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//flow of request: client sends a request to server -> middleware process requests before reach route -> route matches the endpoint -> controller handles the request -> middleware handles errors or modify response to client-> model interacts w database -> response sent back to client
