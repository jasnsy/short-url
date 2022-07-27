import React, { useState } from "react";
import axios from 'axios';
import { Container, Form, Button } from "react-bootstrap"

const ConvertUrl = props => {
    const [shortUrl, setShortUrl] = useState("");

    const convert = async (e) => {
        e.preventDefault();
        const longUrl = e.target[0].value;
        const { data } = await axios.post('http://localhost:5000/api/v1/urls', { longUrl });
        setShortUrl(data.shortUrl);
    };

    const copy = () => {
        navigator.clipboard.writeText(shortUrl)
    };

    return (
        <Container>
           <Form onSubmit={convert}>
                <Form.Group className="mb-3" controlId="longUrl">
                    <Form.Label>URL to convert</Form.Label>
                    <Form.Control placeholder="Enter URL" />
                </Form.Group>
                <Button variant="primary" type="submit">Convert</Button>
           </Form>
           <br/>
           <Form>
                <Form.Group className="mb-3" controlId="convertedUrl">
                    <Form.Label>Converted URL</Form.Label>
                    <Form.Control as="textarea" rows={2} value={shortUrl} readOnly={true} />
                </Form.Group>
                <Button variant="primary" onClick={copy} disabled={shortUrl ? false : true}>Copy</Button>
            </Form>
        </Container>
    );
}

export default ConvertUrl;