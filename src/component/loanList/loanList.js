import React from "react";
import { Card, Table, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class LoanList extends React.Component {
    state = {
        data: [],
        page: [],
        active : 1
    }
    componentDidMount() {
        this.getData(1)
    }

    async getData(no) {
        let data = [];
        let page = [];
        let active = no;
        let payload = {
            "token": localStorage.getItem("user"),
            "no": no
        }
        let headers = {
            'headers': {
                'Authorization': `token ${localStorage.getItem("user")}`
            }
        }
        await axios.post('http://localhost:3300/user/dashboard', payload, headers)
        .then(function(result) {
            result.data.data.forEach(function(dasdata) {
                data.push({
                    invoice: dasdata.invoice,
                    totalPinjam: dasdata.loan_amount,
                    tenur: dasdata.loan_length,
                    status: dasdata.status
                })
            })

            for (let number = 1; number <= result.data.pagination; number++) {
                page.push(number);
            }
        })
        .catch(function(err) {
            localStorage.removeItem("user");
            window.location.assign("/login");
        })

        this.setState({
            data,
            page,
            active
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
                            <td key={(index + 1) + (this.state.active - 1) * 5}>{(index + 1) + (this.state.active - 1) * 5}</td>
                            <td key={(index + 2) + (this.state.active - 1) * 5}><Link to={"/user/createloan?id=" + item.invoice}>{item.invoice}</Link></td>
                            <td key={(index + 3) + (this.state.active - 1) * 5}>Rp{item.totalPinjam}</td>
                            <td key={(index + 4) + (this.state.active - 1) * 5}>{item.tenur} Bulan</td>
                            <td key={(index + 5) + (this.state.active - 1) * 5}>{item.status}</td>
                        </tr>
                    ))}
                    </tbody>
                    </Table>
                    <Pagination style={{marginLeft: "2px"}}>
                        {this.state.page.map((item, index) => (
                            <Pagination.Item key={item} active={item === this.state.active} onClick={() => {this.getData(item)}}>
                                {item}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </div>
            </Card.Body>
          </Card>
        )
    }
}

export default LoanList;