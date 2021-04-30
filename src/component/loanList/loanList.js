import React from "react";
import { Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class LoanList extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.getData()
    }

    async getData() {
        let data = []
        let payload = {
            "token": localStorage.getItem("user")
        }
        await axios.post('http://localhost:3300/user/dashboard', payload)
        .then(function(result) {
            result.data.data.forEach(function(dasdata) {
                data.push({
                    invoice: dasdata.invoice,
                    totalPinjam: dasdata.loan_amount,
                    tenur: dasdata.loan_length,
                    status: dasdata.status
                })
            })
        })
        .catch(function(err) {
            localStorage.removeItem("user");
        })

        this.setState({
            data
        })
    }
    render() {
        return (
          <Card style={{height: "100%"}}>
            <Card.Body>
                <Card.Title>Daftar Pinjaman</Card.Title>
                <div style={{overflowY: "auto", height: "95%"}}>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Invoice</th>
                        <th>Total Pinjaman</th>
                        <th>Tenur</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>{this.state.data.map((item, index) => (
                        <tr key={index}>
                            <td key={index + 1}>{index + 1}</td>
                            <td key={index + 2}><Link to={"/user/createloan?id=" + item.invoice}>{item.invoice}</Link></td>
                            <td key={index + 3}>Rp{item.totalPinjam}</td>
                            <td key={index + 4}>{item.tenur} Bulan</td>
                            <td key={index + 5}>{item.status}</td>
                        </tr>
                    ))}
                    </tbody>
                    </Table>
                </div>
            </Card.Body>
          </Card>
        )
    }
}

export default LoanList;