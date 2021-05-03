import React from "react";
import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import axios from "axios";

let submitLink = "http://localhost:3300/user/createloan";

class CreateLoan extends React.Component {
    state = {
        "loan_amount": "",
        "loan_length": ""
    }
    async getData() {
        let self = this;
        await axios.post("http://localhost:3300/user/loandetail?id=" + window.location.search.substring(4), {token: localStorage.getItem("user")})
        .then(function(result) {
            self.setState({
                "loan_amount": result.data.data.loan_amount,
                "loan_length": result.data.data.loan_length
            });
            submitLink = submitLink + "?id=" + window.location.search.substring(4);
        })
        .catch(function(err) {
            console.log(err)
            alert(err.response.data.message)
            localStorage.removeItem("user");
            window.location.assign("/login");
        })
    }

    async Submit() {
        if(this.state.loan_amount === "" || this.state.loan_length === "") {
            alert("Please fill the form first");
        }
        else if(this.state.loan_amount < 1000000 || this.state.loan_amount > 10000000) {
            alert("Loan Amount must be between Rp1.000.000 - Rp10.000.000");
        }
        else if(this.state.loan_length < 1 || this.state.loan_length > 12) {
            alert("Loan Length must be between 1 - 12 month(s)");
        }
        else {
            const payload = {
                token: localStorage.getItem("user"),
                loanAmount: this.state.loan_amount,
                loanLength: this.state.loan_length
            }
            await axios.post(submitLink, payload)
            .then(function() {
                window.location.assign("/user/dashboard")
            })
            .catch(function(err) {
                alert(err.response.data.message)
                localStorage.removeItem("user");
                window.location.assign("/login");
            })
        }
    }

    componentDidMount() {
        if(window.location.search !== "") {
            this.getData()
        }
    }

    render() {
        return (
            <div>
                <Card style={{padding: "10px"}}>
                    <h1 style={{textAlign: "center", marginBottom: "50px", marginTop: "30px"}}>Ajukan Pinjaman Baru</h1>
                    <Form>
                        <FormGroup>
                            <Label for="name">Total Pinjaman (Rp)</Label>
                            <Input type="number" min="1000000" max="10000000" value={this.state.loan_amount} onChange={(e) => {this.setState({"loan_amount": e.target.value})}} className="loanAmount" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="ktp">Lama Tenur (Bulan)</Label>
                            <Input type="number" min="1" max="12" value={this.state.loan_length} onChange={(e) => {this.setState({"loan_length": e.target.value})}} className="loanLength" />
                        </FormGroup>
                        <div className="d-flex justify-content-center align-items-center">
                            <Button style={{width: "140px"}} onClick={() => this.Submit()}>Submit</Button>
                        </div>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default CreateLoan;