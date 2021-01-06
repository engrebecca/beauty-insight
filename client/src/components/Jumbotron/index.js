import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./style.css";

const Example = (props) => {
    return (
        <div>
            <Jumbotron fluid id="jumbotron">
                <Container fluid>
                    <p className="display-1 text-white">Beauty Product Aggregator</p>
                    <h2 className="text-white">Making market analysis simple.</h2>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Example;