import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import Products from "../components/Products";
import API from "../utils/API";

function Homepage() {
    const [search, setSearch] = useState("")
    const [products, setProducts] = useState([])

    // useEffect hook to load and render products from database when page loads or when a new search is made
    useEffect(() => {
        loadProducts()
    }, [])

    // Function to load products from database
    function loadProducts() {
        API.getProducts()
            .then(res => {
                setProducts(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Searchbar />
            <Products products={products} />
        </div>
    )
}

export default Homepage