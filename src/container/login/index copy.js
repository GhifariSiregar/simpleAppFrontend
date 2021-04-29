import React from "react";
import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import axios from "axios";

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

        try {
            let result = await axios.get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
            console.log(result.data)
            window.location = "/"
        }
        catch {
            alert("Error !")
        }
    }

    render() {
        return (
            <div style={{height: "75vh"}} className="d-flex justify-content-center align-items-center">
                <div>
                    <Card style={{width: "400px", padding: "10px", height: "400px"}}>
                        <h1 style={{textAlign: "center", marginBottom: "50px", marginTop: "30px"}}>Login to Proceed</h1>
                        <Form action="" method="POST">
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input value={this.state.password} onChange={(e)=>this.setState({password: e.target.value})} />
                            </FormGroup>
                            <div style={{textAlign: "center"}}>
                                <Button type="submit">Submit</Button>
                            </div>
                        </Form>
                        {/*<Button color="primary" className="buttonLogin" onClick={()=> this.setState({buttonName: "Click Here !"})}>{this.state.buttonName}</Button> */}
                    </Card>
                </div>
            </div>
        )
    }
}

export default login;