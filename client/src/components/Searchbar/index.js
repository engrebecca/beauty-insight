import React from 'react';
import { FormGroup, Button, Input, Container, Form, Label } from 'reactstrap';
import "./style.css";

const Searchbar = (props) => {
    return (
        <Container>
            <Form className="text" id="searchbar">
                <FormGroup>
                    <Label for="searchUrl">Enter a Sephora URL for product search results you would like to analyze.</Label>
                    <Input value={props.value} onChange={props.handleInputChange} type="url" name="url" id="searchUrl" placeholder="https://www.sephora.com" />
                </FormGroup>
                <Button onClick={props.submit} type="submit">Search</Button>
            </Form>
        </Container>
    );
};

export default Searchbar;