import React, {useState} from "react";
import { Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import {axiosWithAuth} from "../components/utils/axiosWithAuth";


const Button = styled.button`
  font-size: 22px;
  padding: 5px 20px;
  border-radius: 2px;
  margin: 10px 0 30px 0;
  background: goldenrod;

  &:hover {
    background: #fff;
    cursor: pointer;
  }
`;



export default function Login() {
  return (
    <Form>
      <Field type="text" name="email" placeholder="email" />
      <ErrorMessage name="email" />
      <Field type="password" name="password" placeholder="password" />
      <ErrorMessage name="password" />
      <Button type="submit"> Submit </Button>
    </Form>
  );
}
