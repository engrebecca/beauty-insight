import React from "react";

function Products(props) {

    // Returns a row for each product
    return (<>
        {props.products.map((product, i) => (
            <div className="container" key={i}>
                <div className="row">
                    <div className="col-2 center-text">
                        <img src={product.image} alt={product.product}></img>
                    </div>
                    <div className="col-2 center-text">
                        {product.product}
                    </div>
                    <div className="col-2 center-text">
                        {product.brand}
                    </div>
                    <div className="col center-text">
                        {product.msrp}
                    </div>
                    <div className="col center-text">
                        {product.rating}
                    </div>
                    <div className="col center-text">
                        {product.reviews}
                    </div>
                    <a className="col center-text" href={product.link} target="blank">Link</a>
                </div>
            </div>
        ))
        }</>
    );
}

export default Products;