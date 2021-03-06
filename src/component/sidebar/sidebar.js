import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { usersAuthentication } from "../../api/users_auth";

class SideBar extends React.Component {
    async logout() {
        try {
            await usersAuthentication.logout();
        }
        catch(err) {
            localStorage.removeItem("user");
            window.location.assign("/login");
        }
    }
    render() {
        return (
            <ButtonGroup vertical style={{backgroundColor: "#2596be"}}>
                <Link to="/user/dashboard"><Button style={{width: "300px", height: "50px"}}>Dashboard</Button></Link>
                <Link to="/user/createLoan"><Button style={{width: "300px", height: "50px"}}>Ajukan Pinjaman</Button></Link>
                <Button onClick={() => this.logout()} style={{width: "300px", height: "50px"}}>Logout</Button>
                <Button style={{height: "70vh"}} disabled></Button>
            </ButtonGroup>
        )
    }
}

export default SideBar;