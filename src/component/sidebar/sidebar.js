import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class SideBar extends React.Component {
    render() {
        return (
            <ButtonGroup vertical style={{backgroundColor: "#2596be"}}>
                <Link to="/user/dashboard"><Button style={{width: "300px", height: "50px"}}>Dashboard</Button></Link>
                <Link to="/user/createLoan"><Button style={{width: "300px", height: "50px"}}>Ajukan Pinjaman</Button></Link>
                <Button style={{height: "75vh"}} disabled></Button>
            </ButtonGroup>
        )
    }
}

export default SideBar;