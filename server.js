// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/productRoutes")

// Initialize Express & set up port
const app = express();
const PORT = process.env.PORT || 5000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/beauty_aggregator",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// Start the API server
app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);