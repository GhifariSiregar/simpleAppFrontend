import React from "react";
import { Navbar } from "react-bootstrap";

class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="/"><img src="https://fit.id/static/media/logo.35941295.svg" width="50px" alt="logo"/></Navbar.Brand>
            </Navbar>
        )
    }
}

export default NavBar;