import React, { useState, useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import {authContext} from '../../../context/auth_context';
import {useHistory} from 'react-router-dom';
import Api from '../../../services/Api';

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setAuthData } = useContext(authContext);
  const history = useHistory();


  const onFormSubmit = e => {
    e.preventDefault();
    Api.post('login', {email : email, password: password}).then(resp => {
        setAuthData(resp.data)
        history.push('/administration');
    }).catch((e) => {
        if(e.response.data.error == 'invalid_credentials'){
            alert('Username or password not match with our record')
        }
        // console.log(e.response)
    });
  };




  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div style={{ width: 300 }}>
        <h1 className="text-center">Sign in</h1>
        <Form onSubmit={onFormSubmit}>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100 mt-3"
          >
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
