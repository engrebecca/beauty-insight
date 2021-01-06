import React from "react";

function Products(props) {

    // Returns a row for each product
    return (<>
        {props.products.map((product, i) => (
            <div className="container" key={i}>
                <div className="row">
                    <div className="col-2 center-text">
                        <img src={employee.image} alt={employee.firstname} className="img-thumbnail"></img>
                    </div>
                    <div className="col-2 center-text">
                        {employee.firstname}
                    </div>
                    <div className="col-2 center-text">
                        {employee.lastname}
                    </div>
                    <div className="col-2 center-text">
                        {employee.position}
                    </div>
                    <div className="col-2 center-text">
                        {employee.department}
                    </div>
                    <div className="col-2 center-text">
                        {employee.email}
                    </div>
                </div>
            </div>
        ))
        }</>
    );
}

export default Products;