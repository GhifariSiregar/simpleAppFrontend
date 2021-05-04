import React from "react";
import { Button, Form, FormGroup, Label, Input, Card, Spinner } from 'reactstrap';
import { loanManagement } from "../../api/loanManagement";

let submitLink = "http://localhost:3300/user/createloan";

class CreateLoan extends React.Component {
    state = {
        "loan_amount": "",
        "loan_length": ""
    }
    async getData() {
        try {
            let data = await loanManagement.getLoanDetail(window.location.search.substring(4));
            this.setState({
                "loan_amount": data.loan_amount,
                "loan_length": data.loan_length
            });
            submitLink = submitLink + "?id=" + window.location.search.substring(4);
        }
        catch(err) {
            console.log(err)
            localStorage.removeItem("user");
            window.location.assign("/login");
        }
    }

    async Submit() {
        document.getElementById("submit-btn-spin").style.display = "inherit";
        document.getElementById("submit-btn-text").style.display = "none";
        try {
            loanManagement.submitNewLoan(this.state.loan_amount, this.state.loan_length, submitLink);
        }
        catch(err) {
            alert(err.response.data.message)
            localStorage.removeItem("user");
            window.location.assign("/login");
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
                            <Button style={{width: "140px"}} onClick={() => this.Submit()}><span id="submit-btn-text">Submit</span><Spinner style={{display: "none", marginLeft: "30%"}} id="submit-btn-spin" /></Button>
                        </div>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default CreateLoan;