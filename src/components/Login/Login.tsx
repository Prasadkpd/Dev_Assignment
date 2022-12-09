import { useState } from "react";
import { Formik } from "formik";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import * as yup from 'yup';
import { loginApi } from "./action";
import Homepage from "../Homepage";

const schema = yup.object().shape({
    Email: yup.string().email().required(),
    Password: yup.string().min(4).required(),
});

const initialState = {
    Email: '',
    Password: ''
};

const Login = () =>
{

    const [error, setError] = useState<string>('');
    const [loggedIn, setloggedIn] = useState(false);
    const [username, setusername] = useState('');

    const handleOnLogin = async (values: { Email: any; Password: any; }) =>
    {
        const res: any = await loginApi(values.Email, values.Password);
        if (res.message === "success")
        {
            const name = res.data.Name;
            setusername(name);
            setloggedIn(true);
        } else
        {
            setError(res.message);
        }
    }

    return (
        <div>
            { !loggedIn ? <Row className="login-card d-flex align-items-center justify-content-center">
                <Col lg={ 4 } md={ 6 } sm={ 10 } xs={ 10 } className='p-2'>
                    <Row>
                        <Col className='p-3 bg-white' style={ { borderRadius: "20px" } }>
                            <Row>
                                <Col lg={ 12 }
                                    className='d-flex flex-column justify-content-center align-items-center mb-3 py-2'>
                                    <h1>Login</h1>
                                    { error && <Alert variant="danger" className="py-1 mt-2">{ error }</Alert> }
                                </Col>
                            </Row>
                            <Row>
                                <Col className='px-4'>
                                    <Formik validationSchema={ schema } onSubmit={ console.log } initialValues={ initialState }>
                                        { ({
                                            handleChange, handleBlur, values,
                                            touched, errors,
                                        }) => (
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter email"
                                                        name="Email"
                                                        value={ values.Email }
                                                        onChange={ handleChange }
                                                        isValid={ touched.Email && !errors.Email }
                                                        isInvalid={ !!errors.Email }
                                                        onBlur={ handleBlur } />
                                                    <Form.Control.Feedback type="invalid">
                                                        { errors.Email }
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Enter password here."
                                                        name="Password"
                                                        value={ values.Password }
                                                        onChange={ handleChange }
                                                        onBlur={ handleBlur }
                                                        isValid={ touched.Password && !errors.Password }
                                                        isInvalid={ !!errors.Password }
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        { errors.Password }
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Button className='float-end me-2 mb-3'
                                                    onClick={ () => handleOnLogin(values) }>Login</Button>
                                            </Form>) }
                                    </Formik>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row> : <Homepage name={ username } isLoggedIn={loggedIn}/> }
        </div>
    );
};


export default Login;