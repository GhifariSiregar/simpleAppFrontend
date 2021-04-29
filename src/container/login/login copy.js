import React from "react";
import { Button, Form, FormGroup, Label, Input, Card, FormFeedback, Spinner } from 'reactstrap';
import { Link } from "react-router-dom";

class login extends React.Component {
    state = {
        buttonName : "Simpan",
        email : "test@test.com",
        password : "12345"
    }

    async Submit() {
        const payload = {
            email: this.state.email, 
            password: this.state.password
        }

        if(this.state.email === "" || this.state.password === "") {
            alert("Harap diisi")
        }

        const token = Math.random(1000);

        localStorage.setItem("user", token)
    }

    render() {
        return (
            <div style={{height: "75vh"}} className="d-flex justify-content-center align-items-center">
                <div>
                    <Card style={{width: "400px", padding: "10px", height: "400px"}}>
                        <h1 style={{textAlign: "center", marginBottom: "50px", marginTop: "30px"}}>Login to Proceed</h1>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input invalid={this.state.email === ""} type="email" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})} />
                                <FormFeedback>Email harus diisi</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input invalid={this.state.password === ""} type="password" value={this.state.password} onChange={(e)=>this.setState({password: e.target.value})} />
                                <FormFeedback>Password harus diisi</FormFeedback>
                            </FormGroup>
                            <div className="d-flex justify-content-between align-items-center">
                                <Button style={{width: "140px"}} onClick={() => this.Submit()}>Submit</Button>
                                <Link to="/register">Create New Account</Link>
                            </div>
                        </Form>
                    </Card>
                </div>
            </div>
        )
    }
}

export default login;