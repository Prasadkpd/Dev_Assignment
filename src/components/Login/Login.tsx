import {Formik} from "formik";
import {useState} from "react";
import {Alert, Button, Col, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import * as yup from 'yup';
import {login} from "./action";

const schema = yup.object().shape({
    Username: yup.string().min(4).required(),
    Password: yup.string().min(4).required(),
});

const initialState = {
    Username: '',
    Password: ''
};

const Login = () => {

    const navigate = useNavigate();
    const [error, setError] = useState<string>('');

    const handleOnLogin = (values: { Username: any; Password: any; }) => {
        const response = login(values.Username, values.Password);
        const username = values.Username;
        console.log(response);
        if (response === "success") {
            navigate('/home', {state: {username}});
        } else {
            setError(response);
        }
    }

    return (
        <Row className="login-card d-flex align-items-center justify-content-center">
            <Col lg={4} md={6} sm={10} xs={10} className='p-2'>
                <Row>
                    <Col className='p-3 bg-white' style={{borderRadius: "20px"}}>
                        <Row>
                            <Col lg={12}
                                 className='d-flex flex-column justify-content-center align-items-center mb-3 py-2'>
                                <h1>Login</h1>
                                {error && <Alert variant="danger" className="py-1 mt-2">{error}</Alert>}
                            </Col>
                        </Row>
                        <Row>
                            <Col className='px-4'>
                                <Formik validationSchema={schema} onSubmit={console.log} initialValues={initialState}>
                                    {({ handleChange, handleBlur, values,
                                          touched, errors,
                                      }) => (
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Username</Form.Label>
                                                <Form.Control type="text" placeholder="Enter username"
                                                              name="Username"
                                                              value={values.Username}
                                                              onChange={handleChange}
                                                              isValid={touched.Username && !errors.Username}
                                                              isInvalid={!!errors.Username}
                                                              onBlur={handleBlur}/>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.Username}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Enter password here."
                                                              name="Password"
                                                              value={values.Password}
                                                              onChange={handleChange}
                                                              onBlur={handleBlur}
                                                              isValid={touched.Password && !errors.Password}
                                                              isInvalid={!!errors.Password}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.Password}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Button className='float-end me-2 mb-3'
                                                    onClick={() => handleOnLogin(values)}>Login</Button>
                                        </Form>)}
                                </Formik>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>);
}

export default Login;