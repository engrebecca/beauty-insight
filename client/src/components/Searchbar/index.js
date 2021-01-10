import React from 'react';
import { FormGroup, Button, Input, Container, Form, Label } from 'reactstrap';
import "./style.css";

const Searchbar = (props) => {
    return (
        <Container>
            <Form className="text" id="searchbar">
                <FormGroup>
                    <Label for="searchUrl">Enter the Sephora URL for a product category to retrieve data.</Label>
                    <Input value={props.value} onChange={props.handleInputChange} type="url" name="url" id="searchUrl" placeholder="https://www.sephora.com/shop/lipstick" />
                </FormGroup>
                <Button onClick={props.submit} type="submit">Search</Button>
            </Form>
        </Container>
    );
};

export default Searchbar;