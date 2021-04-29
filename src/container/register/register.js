import React from "react";
import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setRegisterForm } from "../../redux/action/registerAuthAction";

class Register extends React.Component {
    handleChange = (payload) => {
        const newval = {
            ...this.props.registerForm,
            ...payload
        }
        this.props.setRegisterForm(newval)
    }

    render() {
        document.title = "Register New Account";
        return (
            <div style={{height: "130vh"}} className="d-flex justify-content-center align-items-center">
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
                                <Button style={{width: "140px"}} type="submit">Submit</Button>
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