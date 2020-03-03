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
import { signUp } from "../actions/index";
import { connect } from "react-redux";

const RegistrationForm = props => {
  const [newUser, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = event => {
    setUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.signUp(newUser);
  };

  return (
    <Container className="Container">
      {console.log(newUser)}
      <Form className="form" onSubmit={event => handleSubmit(event)}>
        <Col>
          <FormGroup>
            <Label htmlFor="firstname">Firstname: </Label>
            <Input
              id="firstname"
              type="text"
              name="firstname"
              placeholder="Enter Your First Name"
              required
              value={newUser.firstname}
              onChange={event => handleChange(event)}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor="lastname">Lastname: </Label>
            <Input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Enter Your Last Name"
              required
              value={newUser.lastname}
              onChange={event => handleChange(event)}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor="username">Username: </Label>
            <Input
              id="username"
              type="text"
              name="username"
              placeholder="Enter Your Username"
              required
              value={newUser.username}
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
              placeholder="Enter Your Password"
              required
              value={newUser.password}
              onChange={event => handleChange(event)}
            />
          </FormGroup>
        </Col>
        {/* <Col>
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password:</Label>
            <Input
              id="confirmPassword"
              type="password"
              name="password"
              placeholder="Confirm Your Password"
              required
              value={newUser.confirmPassword}
              onChange={event => handleChange(event)}
            />
          </FormGroup>
        </Col> */}
        <Button type="submit" id="submit-btn">
          Submit!
        </Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, { signUp })(RegistrationForm);
