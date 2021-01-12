import React from "react";
import { Button } from 'reactstrap';
import API from "../../utils/API";
import "./style.css";

function Products(props) {
    // Function to delete product from database
    function deleteProduct(productId) {
        API.deleteProduct(productId)
            .then(res => {
                props.reload();
            })
            .catch(err => console.log(err))
    }

    // Returns a row for each product
    return (<>
        {props.products.map((product, i) => (
            <div className="container text" key={i}>
                <div className="row">
                    <div className="col-lg-2 center-text cell-format">
                        <a className="col center-text cell-format" href={product.link} target="blank"><img src={product.image} alt={product.product} className="productImg"></img></a>
                    </div>
                    <div className="col-lg-2 center-text cell-format">
                        {product.product}
                    </div>
                    <div className="col-lg-2 center-text cell-format">
                        {product.brand}
                    </div>
                    <div className="col-lg center-text cell-format">
                        ${product.msrp}
                    </div>
                    <div className="col-lg center-text cell-format">
                        Rating: {product.rating}
                    </div>
                    <div className="col-lg center-text cell-format">
                        Reviews: {product.reviews}
                    </div>
                    <div className="col-lg center-text cell-format">
                        <Button color="danger" onClick={() => deleteProduct(product._id)}>Delete</Button>{' '}
                    </div>
                </div>
            </div>
        ))
        }</>
    );
}

export default Products;