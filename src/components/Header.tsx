import React, {lazy} from "react";
import {
    Container,
    Navbar,
    Nav,
} from "react-bootstrap";
import Web3ConnectButton from 'src/components/Web3Connect'
// const Web3ConnectButton = lazy(()=> import('src/components/Web3Connect'))

type HeaderProps = {
    account: any
    setProviderData: any
}

const Header: React.FC<HeaderProps> = ({ account, setProviderData }) => {
    return (
        <Navbar>
            <Container>

                <Navbar.Brand href="/home" as={Nav.Link}>
                    DGOV 2.0
                </Navbar.Brand>

                <Navbar.Brand href="/markets" as={Nav.Link}>
                    Markets
                </Navbar.Brand>
                <Navbar.Brand href="/about" as={Nav.Link}>
                    {/* <Nav.Link href="/about"> About</Nav.Link> */}
                    About
                </Navbar.Brand>
                <Navbar.Brand href="/wallet" as={Nav.Link}>
                    Wallet
                </Navbar.Brand>
                <Nav>
                    <Web3ConnectButton account1={account} setProviderData={setProviderData} />
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Header