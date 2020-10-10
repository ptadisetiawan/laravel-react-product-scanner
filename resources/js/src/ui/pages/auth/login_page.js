import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
function LoginPage() {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setError(null);
        setLoading(true);
        axios.post('http://localhost:8000/api/login', { username: username.value, password: password.value }).then(response => {
          setLoading(false);
          setUserSession(response.data.token, response.data.user);
          props.history.push('/dashboard');
        }).catch(error => {
          setLoading(false);
          if (error.response.status === 401) setError(error.response.data.message);
          else setError("Something went wrong. Please try again later.");
        });
      }

    return (
        <Container style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Card style={{
                width: 300,
                marginTop: '20%'
            }}>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                        <input type="button" className="btn btn-primary float-right" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
        console.log(e.target.value)
    }
    return {
        value,
        onChange: handleChange
    }
}
export default LoginPage;
