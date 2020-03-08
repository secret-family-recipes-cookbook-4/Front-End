import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Container,
  Col,
  Form,
  FormGroup,
  FormText,
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
    props.history.push("/recipes");
  };

  return (
    <Container className="Container">
      <Form onSubmit={event => handleSubmit(event)} className="form">
        <Col>
          <FormGroup>
            <Label htmlFor="username">Username: </Label>
            <Input
              id="username"
              type="text"
              name="username"
              required
              value={user.username}
              onChange={event => handleChange(event)}
              className="field"
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
              required
              value={user.password}
              onChange={event => handleChange(event)}
              className="field"
            />
          </FormGroup>
        </Col>
        <Button className="btn" type="submit">
          Login
        </Button>
        <Col>
          <FormGroup>
            <FormText className="signup">
              Don't have an account.
              <br></br>
              <br></br>
              <NavLink to="/RegistrationForm" className="newSignup">
                Signup here.
              </NavLink>
            </FormText>
          </FormGroup>
        </Col>
      </Form>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, { logIn })(RegistrationForm);
