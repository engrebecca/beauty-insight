import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input, Container } from 'reactstrap';

const Searchbar = (props) => {
    return (
        <Container>
            <InputGroup>
                <Input placeholder="https://www.sephora.com" />
                <InputGroupAddon addonType="append">
                    <Button color="secondary">Search</Button>
                </InputGroupAddon>
            </InputGroup>
        </Container>
    );
};

export default Searchbar;