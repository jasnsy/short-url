import React, { useState } from "react";
import axios from 'axios';
import { Container, Form, Button } from "react-bootstrap"

const UrlDetails = props => {
    const [details, setDetails] = useState();

    const getDetails = async (e) => {
        e.preventDefault();
        const shortUrl = new URL(e.target[0].value);
        const code = shortUrl.pathname.replace("/", "");
        const { data } = await axios.get(`http://localhost:5000/api/v1/urls/${code}`);
        setDetails(data);
    };

    const copy = () => {
        navigator.clipboard.writeText(details)
    };

    return (
        <Container>
           <Form onSubmit={getDetails}>
                <Form.Group className="mb-3" controlId="form.code">
                    <Form.Label>Short URL</Form.Label>
                    <Form.Control placeholder="Enter Shorten URL" />
                </Form.Group>
                <Button variant="primary" type="submit">Get Details</Button>
           </Form>
           <br/>
           <Form>
                <Form.Group className="mb-3" controlId="urlDetails">
                    <Form.Label>Short URL Details</Form.Label>
                    <Form.Control as="textarea" rows={6} value={JSON.stringify(details)} readOnly={true} />
                </Form.Group>
                <Button variant="primary" onClick={copy} disabled={details ? false : true}>Copy</Button>
            </Form>
        </Container>
    );
}

export default UrlDetails;