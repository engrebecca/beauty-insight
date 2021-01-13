import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import Title from "../components/Title";
import Products from "../components/Products";
import Spinner from "../components/Spinner";
import { Button } from "reactstrap"
import API from "../utils/API";
import "./style.css";

function Homepage() {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [searchPending, setSearchPending] = useState(false);
    const [average, setAverage] = useState([])

    // useEffect hook to load and render products from database when page loads
    useEffect(() => {
        loadProducts()
    }, [])

    // Function to load products from database and get average MSRP for all products
    function loadProducts() {
        API.getProducts()
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.log(err));
        API.getAverage()
            .then(res => {
                res.data[0] ?
                    setAverage(res.data[0].average.toFixed(2)) :
                    setAverage(0)
            })
    }

    // Function to handle input change for search url
    function handleInputChange(e) {
        setSearch(e.target.value)
    }

    // Function to handle search submission
    function submitSearch(e) {
        e.preventDefault();
        if (!search) {
            return
        }
        // Set searchPending to true so spinner shows data is loading
        setSearchPending(true);
        let searchUrl = {
            url: search
        }
        // Add products to the database based on the searched URL, then load products to page and hide spinner
        API.addProducts(searchUrl)
            .then(res => {
                setSearchPending(false);
                loadProducts();
            })
            .catch(err => console.log(err))
        setSearch("")
    }

    // Function to delete all products
    function deleteAllProducts() {
        API.deleteAll()
            .then(res => {
                loadProducts();
            })

    }

    return (
        <div>
            {/* If there are products in the database, render the MSRP average to page */}
            {
                products.length > 1 ?
                    <p className="avgFont">Average MSRP: ${average}</p> :
                    <p></p>
            }
            <Searchbar value={search} handleInputChange={handleInputChange} submit={submitSearch} />
            {/* If product data is being loaded from search, show spinner */}
            {searchPending ?
                <Spinner /> :
                <div />
            }
            {/* If there are products in the database, show the title component */}
            {
                products.length > 1 ?
                    <Title /> :
                    <p></p>
            }
            <Products products={products} reload={loadProducts} />
            {/* If there is more than one product rendered to page, render delete all button*/}
            {
                products.length > 1 ?
                    <Button color="danger" onClick={deleteAllProducts} className="my-5">Delete All Products</Button> :
                    <div />
            }
        </div>
    )
}

export default Homepage