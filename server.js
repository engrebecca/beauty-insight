// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");

// Initialize Express
const app = express();

// Set up MongoDB w/ Mongoose

// Routes
// Scrap foundation data from Sephora.com ppage, save response data using Cheerio
// app.get("/scrape", (req, res) => {
axios.get("https://www.sephora.com/shop/foundation-makeup?ref=100082,100058,14577894").then(response => {
    let $ = cheerio.load(response.data);
    let results = [];
    $(".css-12egk0t").each((i, element) => {
        let title = $(element).find("a").attr("aria-label");
        let brand = $(element).find("span[data-at*= 'sku_item_brand']").text();
        let msrp = $(element).find("span[data-at*= 'sku_item_price_list']").text();
        let rating = $(element).find("div[class= 'css-jp4jy6']").attr("aria-label");
        let reviews = $(element).find("span[class= 'css-1dk1ux']").text();
        let link = `https://sephora.com${$(element).find("a").attr("href")}`;
        let image = `https://sephora.com${$(element).find("img").attr("src")}`;
        results.push({
            title: title,
            brand: brand,
            msrp: msrp,
            link: link,
            image: image,
            rating: rating,
            reviews: reviews
        })
    })
    console.log(results);
})
// })