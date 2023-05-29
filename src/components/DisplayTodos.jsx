import React, { useState } from "react";
import DisplayCount from "./DisplayCount";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";

const DisplayTodos = ({ todos }) => {
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

const mapStateToProps = (state) => {
  console.log(state.todoReducer);
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
