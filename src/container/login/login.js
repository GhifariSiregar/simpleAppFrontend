import React from "react";
import { Button, Form, FormGroup, Label, Input, Card, FormFeedback, Spinner } from 'reactstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setLoginForm } from "../../redux/action/login_auth_action";
import { usersAuthentication } from "../../api/users_auth";

class login extends React.Component {
    state = {
        onValidationEmail: false,
        onValidationPassword: false
    }

    handleChange = (payload) => {
        const newval = {
            ...this.props.loginForm,
            ...payload
        }
        this.props.setLoginForm(newval)
    }

    async Submit() {
        document.getElementById("submit-btn-spin").style.display = "inherit";
        document.getElementById("submit-btn-text").style.display = "none";

        try {
            await usersAuthentication.userLogin(this.props.loginForm.email, this.props.loginForm.password);
        }
        catch(err) {
            console.log(err);
            document.getElementById("submit-btn-spin").style.display = "none";
            document.getElementById("submit-btn-text").style.display = "inherit";
        }
    }

    render() {
        document.title = "Login to Proceed";
        return (
            <div style={{height: "75vh"}} className="d-flex justify-content-center align-items-center">
                <div>
                    <Card style={{width: "400px", padding: "10px", height: "400px"}}>
                        <h1 style={{textAlign: "center", marginBottom: "50px", marginTop: "30px"}}>Login to Proceed</h1>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input invalid={this.props.loginForm.email === "" && this.state.onValidationEmail === true} type="email" value={this.props.loginForm.email} onClick={()=> {if(this.props.loginForm.email === " ") { this.props.loginForm.email = ""}}} onChange={(e)=>{this.handleChange({email: e.target.value}); this.setState({onValidationEmail: true});}} />
                                <FormFeedback>Email harus diisi</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input invalid={this.props.loginForm.password === "" && this.state.onValidationPassword === true} type="password" value={this.props.loginForm.password} onClick={()=> {if(this.props.loginForm.password === " ") { this.props.loginForm.password = ""}}} onChange={(e)=>{this.handleChange({password: e.target.value}); this.setState({onValidationPassword: true});}} />
                                <FormFeedback>Password harus diisi</FormFeedback>
                            </FormGroup>
                            <div className="d-flex justify-content-between align-items-center">
                                <Button style={{width: "140px"}} onClick={(e) => this.Submit()}><span id="submit-btn-text">Submit</span><Spinner style={{display: "none", marginLeft: "30%"}} id="submit-btn-spin" /></Button>
                                <Link to="/register">Create New Account</Link>
                            </div>
                        </Form>
                    </Card>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginForm: state.loginAuthReducer
    }
} 

export default connect(mapStateToProps, {setLoginForm}) (login);