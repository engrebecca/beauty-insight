const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models/product");

// Scrape foundation data from Sephora.com ppage, save response data using Cheerio
app.get("/scrape", async (req, res) => {
    let response = await axios.get("https://www.sephora.com/shop/foundation-makeup?ref=100082,100058,14577894")
    let $ = cheerio.load(response.data);
    // let results = [];
    $(".css-12egk0t").each(async (i, element) => {
        let product = $(element).find("span[data-at*= 'sku_item_name']").text();
        let brand = $(element).find("span[data-at*= 'sku_item_brand']").text();
        let msrpStr = $(element).find("span[data-at*= 'sku_item_price_list']").text();
        let msrp = parseInt(msrpStr.replace("$", ""));
        let shadeCountStr = $(element).find("div[class= 'css-rrjz1n']").text();
        let shadeCount = parseInt(shadeCountStr.split(" ")[0])
        let ratingStr = $(element).find("div[class= 'css-jp4jy6']").attr("aria-label");
        let rating = ratingStr.split(" ")[0];
        let reviews = $(element).find("span[class= 'css-1dk1ux']").text();
        let link = `https://sephora.com${$(element).find("a").attr("href")}`;
        let image = `https://sephora.com${$(element).find("img").attr("src")}`;

        // Create new documents in collection to log product info
        if (product, brand, msrp, shadeCount, link, image, rating, reviews) {
            const newProduct = await db.create({
                product: product,
                brand: brand,
                msrp: msrp,
                shadeCount: shadeCount,
                link: link,
                image: image,
                rating: rating,
                reviews: reviews
            },
                function (err, inserted) {
                    if (err) {
                        // Log the error if one is encountered during the query
                        console.log(err);
                    }
                    else {
                        // Otherwise, log the inserted data
                        console.log(inserted);
                    }
                }
            );
        };
    });
});
module.exports = app