import React, { useState } from "react";
import {
  Button,
  Container,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { logIn } from "../actions/index";
import { connect } from "react-redux";

const RegistrationForm = props => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.logIn(user);
    console.log(user.name);
    console.log(user.password);
  };

  return (
    <Container>
      {console.log(user)}
      <Form onSubmit={event => handleSubmit(event)}>
        <Col>
          <FormGroup>
            <Label htmlFor="username">Username: </Label>
            <Input
              id="username"
              type="text"
              name="username"
              value={user.username}
              onChange={event => handleChange(event)}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor="password">Password: </Label>
            <Input
              id="password"
              type="password"
              name="password"
              value={user.password}
              onChange={event => handleChange(event)}
            />
          </FormGroup>
        </Col>
        <Button>Submit!</Button>
      </Form>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, { logIn })(RegistrationForm);
