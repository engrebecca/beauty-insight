import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./style.css";

const Jmbtrn = (props) => {
    return (
        <div>
            <Jumbotron fluid id="jumbotron">
                <Container fluid>
                    <p className="display-1 text-white jumbo-text">Beauty of Insight</p>
                    <h2 className="text-white jumbo-subtext">Making market analysis simple.</h2>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jmbtrn;