import React, { lazy } from "react";
import {
    Container,
    Navbar,
    Nav,
    NavDropdown
} from "react-bootstrap";
import {Link} from 'react-router-dom'


const SubHeader: React.FC = () => {

    return (
        <>
            <Navbar>
                <Container fluid className="justify-content-start text-light rounded">
                        <Navbar.Brand as={Link} to="/markets/research/current" className="text-light">
                            Current Market
                        </Navbar.Brand>

                    <Navbar.Brand as={Link} to="/markets/research/marketlist" className="text-light">
                        Market List
                    </Navbar.Brand>
{/* 
                    <Navbar.Brand href="/home" className="text-light">
                        Top Ranked
                    </Navbar.Brand>

                    <Navbar.Brand href="/home" className="text-light">
                        Top Predictors
                    </Navbar.Brand> */}

                </Container>
            </Navbar>
        </>
    )
}

export default SubHeader