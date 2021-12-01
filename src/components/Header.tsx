import React from "react";
import {
    Container,
    Navbar,
    Nav,
    NavDropdown
    // Form,
    // FormControl,
    // Button
} from "react-bootstrap";
import Web3ConnectButton from 'src/components/Web3Connect'


const navBarStyles = {
    backgroundColor: "#fff",
    backgroundImage: "linear-gradient(0deg, #D2D2D2 0%, #97D9E1 100%);",
    boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.3)"
};

type HeaderProps = {
    account: any
    setProviderData: any
}

const Header: React.FC<HeaderProps> = ({account, setProviderData}) => {
    return (
        <Navbar>
        <Container>
            
            <Navbar.Brand href="/home" as={Nav.Link}>
                DGOV 2.0
            </Navbar.Brand>

            <Navbar.Brand href="/markets" as={Nav.Link}>
                Markets
            </Navbar.Brand>
                <Nav>
                    <Nav.Link href="/about"> About</Nav.Link>
               </Nav>
               <Nav>
                               <Web3ConnectButton account1={account} setProviderData={setProviderData} />
               </Nav>


        </Container>
        </Navbar>

    )
}

export default Header