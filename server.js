// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../beauty-product-aggregator/models/product");

// Initialize Express & set up port
const app = express();
const PORT = process.env.PORT || 5000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

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

// Routes

// Scrape foundation data from Sephora.com ppage, save response data using Cheerio
// app.get("/scrape", (req, res) => {
axios.get("https://www.sephora.com/shop/foundation-makeup?ref=100082,100058,14577894").then(response => {
    let $ = cheerio.load(response.data);
    let results = [];
    $(".css-12egk0t").each((i, element) => {
        let product = $(element).find("a").attr("aria-label");
        let brand = $(element).find("span[data-at*= 'sku_item_brand']").text();
        let msrp = $(element).find("span[data-at*= 'sku_item_price_list']").text();
        let shadeCount = $(element).find("div[class= 'css-rrjz1n']").text();
        let rating = $(element).find("div[class= 'css-jp4jy6']").attr("aria-label");
        let reviews = $(element).find("span[class= 'css-1dk1ux']").text();
        let link = `https://sephora.com${$(element).find("a").attr("href")}`;
        let image = `https://sephora.com${$(element).find("img").attr("src")}`;
        results.push({
            product: product,
            brand: brand,
            msrp: msrp,
            shadeCount: shadeCount,
            link: link,
            image: image,
            rating: rating,
            reviews: reviews
        })
        // Create new documents in collection to log product info
        try {
            const newProduct = db.create({
                product: product,
                brand: brand,
                msrp: msrp,
                shadeCount: shadeCount,
                link: link,
                image: image,
                rating: rating,
                reviews: reviews
            });
            res.json(newProduct);
        }
        // Return error response code if there is an error
        catch (err) {
            // return res.sendStatus(400);
            console.log("error")
        }
    })
    console.log(results);
})

// Start the API server
app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);