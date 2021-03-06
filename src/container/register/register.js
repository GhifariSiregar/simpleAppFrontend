import React from "react";
import { Button, Form, FormGroup, Label, Input, Card, Spinner } from 'reactstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setRegisterForm } from "../../redux/action/register_auth_action";
import { usersAuthentication } from "../../api/users_auth";

class Register extends React.Component {
    handleChange = (payload) => {
        const newval = {
            ...this.props.registerForm,
            ...payload
        }
        this.props.setRegisterForm(newval)
    }

    async Submit() {
        document.getElementById("submit-btn-spin").style.display = "inherit";
        document.getElementById("submit-btn-text").style.display = "none";
        const payload = {
            email: this.props.registerForm.email, 
            password: this.props.registerForm.password,
            name: this.props.registerForm.name,
            gender: this.props.registerForm.gender,
            address: this.props.registerForm.address,
            ktp: this.props.registerForm.ktp,
            occupancy: this.props.registerForm.occupancy,
            confirmPassword: this.props.registerForm.confirmPassword
        }

        try {
            await usersAuthentication.registerNewUser(payload);
        }
        catch(err) {
            console.log(err);
            document.getElementById("submit-btn-spin").style.display = "none";
            document.getElementById("submit-btn-text").style.display = "inherit";
        }
    }

    render() {
        document.title = "Register New Account";
        return (
            <div style={{height: "140vh"}} className="d-flex justify-content-center align-items-center">
                <div>
                    <Card style={{width: "400px", padding: "10px"}}>
                        <h1 style={{textAlign: "center", marginBottom: "50px", marginTop: "30px"}}>Create New Account</h1>
                        <Form action="/register" method="POST">
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" className="name" value={this.props.registerForm.name} onChange={(e) => this.handleChange({name: e.target.value})} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="ktp">No. KTP</Label>
                                <Input type="number" className="ktp" value={this.props.registerForm.ktp} onChange={(e) => this.handleChange({ktp: e.target.value})} required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="occupancy">Occupancy</Label>
                                <Input type="text" className="occupancy" value={this.props.registerForm.occupancy} onChange={(e) => this.handleChange({occupancy: e.target.value})} required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="gender">Gender</Label>
                                <Input type="select" className="gender" value={this.props.registerForm.gender} onChange={(e) => this.handleChange({gender: e.target.value})} required>
                                    <option value="">--Choose Gender--</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="address">Address</Label>
                                <Input type="text" className="address" value={this.props.registerForm.address} onChange={(e) => this.handleChange({address: e.target.value})} required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" className="email" value={this.props.registerForm.email} onChange={(e) => this.handleChange({email: e.target.value})} required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" className="password" value={this.props.registerForm.password} onChange={(e) => this.handleChange({password: e.target.value})} required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="confirmPassword">Confirm Password</Label>
                                <Input type="password" className="confirmPassword" value={this.props.registerForm.confirmPassword} onChange={(e) => this.handleChange({confirmPassword: e.target.value})} required />
                            </FormGroup>
                            <div className="d-flex justify-content-between align-items-center">
                                <Button style={{width: "140px"}} onClick={() => this.Submit()}><span id="submit-btn-text">Submit</span><Spinner style={{display: "none", marginLeft: "30%"}} id="submit-btn-spin" /></Button>
                                <span>Have an Account? <Link to="/login">Sign-in</Link></span>
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
        registerForm: state.registerAuthReducer
    }
} 

export default connect(mapStateToProps, {setRegisterForm}) (Register);