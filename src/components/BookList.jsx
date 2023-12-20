import React from "react";
import books from "../data/books.json";
import SingleBook1 from "./SingleBook1";
import { Col, Form, Row, Container } from "react-bootstrap";

class BookList1 extends React.Component {
    state = { search: "" };

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label className="label">
                                Il peso della cultura...
                            </Form.Label>
                            <Form.Control
                                className="search"
                                type="text"
                                placeholder="Cerca la tua arma qui!"
                                value={this.state.search}
                                onChange={(e) =>
                                    this.setState({
                                        search: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    {books.fantasy.map((book) => {
                        return <SingleBook1 b={book} key={book.id} />;
                    })}
                </Row>
            </Container>
        );
    }
}

export default BookList1;
