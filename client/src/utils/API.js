import axios from "axios";

export default {
    getProducts: function () {
        return axios.get("/products");
    },
    addProducts: function (url) {
        return axios.post("/scrape", url);
    },
    deleteProduct: function (id) {
        return axios.delete(`/products/delete/${id}`);
    }
};