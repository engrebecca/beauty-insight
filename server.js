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
        let title = $(element).children("a").attr("aria-label")
        let link = `https://sephora.com${$(element).children("a").attr("href")}`
        results.push({
            title: title,
            link: link
        })
    })
    console.log(results);
})
// })