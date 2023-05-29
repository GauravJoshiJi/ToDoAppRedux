import React, { useState } from "react";
import DisplayCount from "./DisplayCount";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { addTodo } from "../redux/actions/todo";
import { connect } from "react-redux";
import { v4 } from "uuid";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    title: "",
    discription: "",
    id: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    //Add todo in store
    addTodo({ ...todo, id: v4() });
    console.log(todo);
    setTodo({
      title: "",
      discription: "",
    });
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3>Add Todo here !!</h3>
              <DisplayCount />
              {/* form  */}
              <Form onSubmit={handleSubmit}>
                {/* title  */}
                <Form.Group>
                  <Form.Label>Todo Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter"
                    value={todo.title}
                    onChange={(event) =>
                      setTodo({ ...todo, title: event.target.value })
                    }
                  />
                </Form.Group>

                {/* Discription  */}
                <Form.Group className="mt-3">
                  <Form.Label>Todo Discription</Form.Label>
                  <Form.Control
                    as={"textarea"}
                    type="text"
                    placeholder="Enter"
                    value={todo.discription}
                    onChange={(event) =>
                      setTodo({ ...todo, discription: event.target.value })
                    }
                  />
                </Form.Group>

                <Container className="text-center mt-3">
                  <Button type="submit" varient="primary">
                    Add Todo
                  </Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
