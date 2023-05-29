import React, { useState } from "react";
import DisplayCount from "./DisplayCount";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const DisplayTodos = () => {
  const [todos, setTodos] = useState([
    {
      title: "first title",
      discription: "first desc",
    },
    {
      title: "Second title",
      discription: "second desc",
    },
  ]);

  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <h3>All todos are here</h3>
              <DisplayCount />
              <ListGroup>
                {todos.map((todo, index) => (
                  <ListGroup.Item key={index}>
                    <h4>{todo.title}</h4>
                    <p>{todo.discription}</p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DisplayTodos;
