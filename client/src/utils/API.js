import axios from "axios";

export default {
    // Get all products from database
    getProducts: function () {
        return axios.get("/products");
    },
    // Scrape a webpage and send to database
    addProducts: function (url) {
        return axios.post("/scrape", url);
    },
    // Delete one product
    deleteProduct: function (id) {
        return axios.delete(`/products/delete/${id}`);
    },
    // Delete all products
    deleteAll: function () {
        return axios.delete("/products/delete");
    },
    // Get average MSRP for all products
    getAverage: function () {
        return axios.get("/products/average")
    }
};