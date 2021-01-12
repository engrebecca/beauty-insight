import React from "react";
import "./style.css";

function Title() {
    return (
        <div className="container text title">
            <div className="row">
                <div className="col-2 center-text font-style">
                    Image
                </div>
                <div className="col-2 center-text font-style">
                    Product Name
                </div>
                <div className="col-2 center-text font-style">
                    Brand
                </div>
                <div className="col center-text font-style">
                    MSRP
                </div>
                <div className="col center-text font-style">
                    Rating
                </div>
                <div className="col center-text font-style">
                    Reviews
                </div>
                <div className="col center-text font-style">
                </div>
            </div>
        </div>
    )
};

export default Title;