import { ChangeEvent, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [username, setUsername] = useState('');
    const navigate = useNavigate();


    const login = () => {
        navigate('/home', { state: { username: username } });
    }

    return (
        <Row className="login-card d-flex align-items-center justify-content-center">
            <Col lg={4} md={6} sm={10} xs={10} className='p-2' >
                <Row>
                    <Col className='p-3 bg-white' style={{ borderRadius: "20px" }}>
                        <Row>
                            <Col lg={12} className='d-flex justify-content-center mb-3 py-2'>
                                <h1>Login</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='px-4'>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="Enter username here." required onChange={(e: ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value); }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter password here." required />
                                    </Form.Group>
                                    <Button className='float-end me-2 mb-3'
                                        onClick={login}>Login</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>);
}

export default Login;