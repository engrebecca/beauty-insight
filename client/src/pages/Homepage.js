import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";

function Homepage() {
    const [search, setSearch] = useState("")
    const [products, setProducts] = useState([])

    // useEffect hook to load and render products from database when page loads or when a new search is made

    // Function to load products from database
    // function loadProducts() {

    // }

    return (
        <div>
            <Searchbar />
        </div>
    )
}

export default Homepage