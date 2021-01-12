import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
} from 'reactstrap';

const Nvbr = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" id="nav" className="text">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                    </Nav>
                </Collapse>
                <NavbarBrand href="/">Beauty of Insight</NavbarBrand>
            </Navbar>
        </div>
    );
}

export default Nvbr;