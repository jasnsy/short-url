import React, { useState } from "react";
import { Container, Nav, Card } from "react-bootstrap"
import ConvertUrl from "./ConvertUrl";
import UrlDetails from "./UrlDetails";

const Home = props => {
    const [tab, setTab] = useState(1);
    const handleSelect = (eventKey) => setTab(eventKey);

    return (
        <Container>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" activeKey={tab} fill="true" onSelect={handleSelect}>
                        <Nav.Item>
                            <Nav.Link eventKey="1" title="Convert Long Url">
                            Convert Long Url
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2" title="Get Short URL Details">
                            Get Short URL Details
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    {
                        {
                            '1': <ConvertUrl />,
                            '2': <UrlDetails />
                        }[tab]
                    }
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Home;