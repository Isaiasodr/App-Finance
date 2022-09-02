const express = require("express");
const cors = require("cors");

const app = express();

// Config JSON response
app.use(express.json());

// Solve CORS
app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));
// Public folder for images
app.use(express.static("public"));

/* routes */
const RevenueRoutes = require("./routes/revenuesRoutes");
app.use("/revenues", RevenueRoutes);

app.listen(5000);
