import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import Title from "../components/Title";
import Products from "../components/Products";
import Spinner from "../components/Spinner";
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
            })
            .catch(err => console.log(err));
    }

    // Function to handle input change or search url
    function handleInputChange(e) {
        setSearch(e.target.value)
    }

    // Function to handle search submission
    function submitSearch(e) {
        e.preventDefault();
        if (!search) {
            return
        }
        let searchUrl = {
            url: search
        }
        API.addProducts(searchUrl)
            .then(res => {
                loadProducts();
            })
            .catch(err => console.log(err))
        setSearch("")
    }

    return (
        <div>
            <Searchbar value={search} handleInputChange={handleInputChange} submit={submitSearch} />
            <Spinner />
            <Title />
            <Products products={products} reload={loadProducts} />
        </div>
    )
}

export default Homepage