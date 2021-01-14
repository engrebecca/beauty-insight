# 💄 Beauty of Insight 💄

## Description
Competitive market analysis is often a painstaking process that involves hours of research to build spreadsheets of comprehensive data. Beauty of Insight is a beauty market analysis tool that allows users to simplify and shorten this process by scraping data from competitive websites. 

As a former brand and product manger in the beauty industry, I built this tool to automate much of the process I previously utilized to gather data insights from industry leaders in the prestige beauty market. Users can enter a Sephora product category shop URL and the top products will be saved and displayed. Information such as a product's image, name, brand, MSRP, rating, and reviews are all captured and displayed. The tool also calculates and displays the average MSRP for all products. 

## Features
* React is used to create the application and the user interface components
    * Multiple useState hooks are utilized to access and update the state of URL searches and product information 
    * A useEffect hook initially renders the page with products from database if any exist
* Cherrio is used to parse markup and scrape data from the website
    * Product images, names, brands, MSRPs, ratings, and reviews are scraped using Cherrio
* Mongoose used to query the MongoDB database
    * Route to add multiple products to the database'
    * Route to get all product information form the database to display on page
    * Route to delete individual products from the database and page
    * Route to delete all products to clear database for a new search
    * Route to calculate the average MSRP for all products


## Built With
* [React.js](https://reactjs.org/) - a front-end JavaScript library for building user interfaces and UI components
* [Reactstrap](https://reactstrap.github.io/) - React framework used to build mobile responsive websites
* [MongoDB](https://www.mongodb.com/) - cross-platform document-oriented database program
* [Mongoose](https://mongoosejs.com/) - object data modeling (ODM) library for MongoDB and Node.js
* [Cheerio](https://www.npmjs.com/package/cheerio) - Node.js library that parses markup and provides an API for traversing data
* [Express](https://expressjs.com/) - backend web application framework for Node.js, for building web applications and APIs
* [Node.js](https://nodejs.org/en/) - a JavaScript runtime environment that allows JavaScript to be run in command line
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - code that creates the logic and structure of the program
* [JSX](https://reactjs.org/docs/introducing-jsx.html) - a syntax extension to JavaScript used in React to describe what a UI should look like
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - defines styling on the HTML page
* [Git](https://git-scm.com/) - version control system to track changes in source code
* [GitHub](https://github.com/) - hosts repository and deploys page on GitHub
* [Heroku](https://heroku.com) - cloud platform for deploying application

## Deployed Link
[Beauty of Insight](https://beauty-insight.herokuapp.com/) - See Live Site

## Usage
1. Enter a Sephora product category URL which begins with https://www.sephora.com/shop and click "Search"
2. Once products load, review and delete any items you wish to not include include in your analysis by clicking "Delete" next to a product
3. An average MSRP for all the products is displayed at the top of the page
4. To delete all products and start a new search, scroll to the bottom and click "Delete All Products"

![Beauty of Insight](client/public/BeautyInsight.gif)

## Code
The below code demonstrates how Cherrio is used to scrape product information from markup which is then inserted into the MongoDB.

        app.post("/scrape", async (req, res) => {
            let url = req.body.url;
            let response = await axios.get(url);
            let $ = cheerio.load(response.data);

            $(".css-12egk0t").each(async (i, element) => {
                let product = $(element).find("span[data-at*= 'sku_item_name']").text();
                let brand = $(element).find("span[data-at*= 'sku_item_brand']").text();
                let msrpStr = $(element).find("span[data-at*= 'sku_item_price_list']").text();
                let msrp = parseInt(msrpStr.replace("$", ""));
                let ratingStr = $(element).find("div[class= 'css-jp4jy6']").attr("aria-label");
                let rating = ratingStr.split(" ")[0];
                let reviews = $(element).find("span[class= 'css-1dk1ux']").text();
                let link = `https://sephora.com${$(element).find("a").attr("href")}`;
                let image = `https://sephora.com${$(element).find("img").attr("src")}`;

                // Create new documents in collection to log scraped product info
                if (product, brand, msrp, link, image, ratingStr, reviews) {
                    await db.create({
                        product: product,
                        brand: brand,
                        msrp: msrp,
                        // shadeCount: shadeCount,
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
            // Send a "Scrape Complete" message to the browser
            res.send("Scrape Complete");
        });

## Author
* Rebecca Eng
* [GitHub](https://github.com/engrebecca)
* [LinkedIn](https://www.linkedin.com/in/engrebecca/)

## Credits
* [pexels.com](https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) - Image in jumbotron
