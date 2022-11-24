import {Button, Col, Row} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";

const Homepage = () => {

    const location = useLocation();
    const user = location.state;
    const userDetails = JSON.parse(JSON.stringify(user));
    const navigate = useNavigate();

    return (
        <Row className="homepage-card d-flex align-items-center justify-content-center">
            <Col lg={4} md={6} sm={10} xs={10} className='p-2'>
                <Row>
                    <Col className='p-3 bg-white' style={{borderRadius: "20px"}}>
                        <Row>
                            <Col lg={12} className='d-flex justify-content-center mb-3 py-2'>
                                <h1>Home Page</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='d-flex flex-column align-items-center'>
                                <h2>Welcome {userDetails.username}</h2>
                                <Button className='mt-2' onClick={() => navigate('/')}>Logout</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>);
}

export default Homepage;