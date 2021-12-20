import React, { lazy } from "react";
import {
    Container,
    Navbar,
    Nav,
    NavDropdown,
    NavbarBrand
} from "react-bootstrap";
import Web3ConnectButton from 'src/components/Web3Connect'
import styles from 'src/components/style.module.css'
import logo from 'src/images/logo.png'
import { Link, NavLink } from 'react-router-dom'


type HeaderProps = {
    web3: any
    account: any
    setProviderData: any
}

const Header: React.FC<HeaderProps> = ({ web3, account, setProviderData }) => {
    const headerStyle = {
        justifycontent: 'flex-start'
    };

    return (
        <Navbar expand="lg" className={styles.navbarcollapse}>
            <Container fluid>
                <Navbar.Brand className="justify-content-start align-text-bottom d-inline-block" as={Link} to="/home">
                    <img
                        alt=""
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-bottom"
                    />{'DAOrayaki'}
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ms-auto">
                        <NavDropdown title="Hot trends markets" id="hot-trend-markets">
                            <NavDropdown.Item as={NavLink} to="/markets/hottrendmarkets/current">Current market</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/markets/hottrendmarkets/marketlist">Market List</NavDropdown.Item>

                            <NavDropdown.Item >Top ranked</NavDropdown.Item>

                            <NavDropdown.Item >Top predictors</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Research markets" id="research-markets">
                            <NavDropdown.Item as={NavLink} to="/markets/researchmarkets/current">Current market</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink}  to="/markets/researchmarkets/marketlist">Market List</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Top ranked</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Top predictors</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Content space" id="content-space">
                            <NavDropdown.Item href="https://forum.daorayaki.cn/">Discussion Forum</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Ranked writers</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Ranked topics</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Predictors space</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Events</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="How it works?" id="research-markets">
                            <NavDropdown.Item href="#action/3.1">Futarchy mechanism</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Participation rules</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Governance rules</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Schedules</NavDropdown.Item>
                        </NavDropdown>

                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/wallet">Wallet</Nav.Link>
                        </Nav>

                        <NavDropdown title="About" id="research-markets">
                            <NavDropdown.Item href="#action/3.1">DAOrayaki</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Contact US</NavDropdown.Item>
                        </NavDropdown>

                        <Nav className={styles.web3Button}>
                            <Web3ConnectButton account1={account} setProviderData={setProviderData} web3={web3} />
                        </Nav>
                    </Nav>
                    {/* </Container> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header