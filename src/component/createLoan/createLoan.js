import React from "react";
import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';

class CreateLoan extends React.Component {
    render() {
        return (
            <div>
                <Card style={{padding: "10px"}}>
                    <h1 style={{textAlign: "center", marginBottom: "50px", marginTop: "30px"}}>Ajukan Pinjaman Baru</h1>
                    <Form action="/user/createloan" method="POST">
                        <FormGroup>
                            <Label for="name">Total Pinjaman (Rp)</Label>
                            <Input type="number" min="1000000" max="10000000" className="loanAmount" required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="ktp">Lama Tenur (Bulan)</Label>
                            <Input type="number" min="1" max="12" className="loanLength" required />
                        </FormGroup>
                        <div className="d-flex justify-content-center align-items-center">
                            <Button style={{width: "140px"}} type="submit">Submit</Button>
                        </div>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default CreateLoan;