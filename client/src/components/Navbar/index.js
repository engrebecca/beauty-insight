import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Button
} from 'reactstrap';

const Nvbr = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    function deleteAllProducts() {
        console.log("Delete all products");

    }

    return (
        <div>
            <Navbar color="light" light expand="md" id="nav" className="text">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <Button color="danger" onClick={deleteAllProducts}>Delete All Products</Button>{' '}
                    </Nav>
                </Collapse>
                <NavbarBrand href="/">Beauty of Insight</NavbarBrand>
            </Navbar>
        </div>
    );
}

export default Nvbr;