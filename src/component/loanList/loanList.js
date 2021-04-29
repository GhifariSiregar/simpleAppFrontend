import React from "react";
import { Card, Table } from "react-bootstrap";

class LoanList extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.getData()
    }

    getData() {
        let data = []
        for(let i=0; i<50; i++) {
            data.push({
                invoice: String(i),
                totalPinjam: (1000 + i),
                tenur: 5,
                status: "Menunggu Pencairan"
            })
        }

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
                    <tbody> {this.state.data.map((item, index) => (
                        <tr>
                        <td>{index + 1}</td>
                        <td>{item.invoice}</td>
                        <td>{item.totalPinjam}</td>
                        <td>{item.tenur}</td>
                        <td>{item.status}</td>
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