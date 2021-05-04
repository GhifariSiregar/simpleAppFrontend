import React from "react";
import { Card, Table, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loanManagement } from "../../api/loan_management";

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
        try {
            let active = no;
            let loanList = await loanManagement.getLoanList(no);
            
            this.setState({
                data: loanList.listOfLoan,
                page: loanList.pagination,
                active
            });
        }
        catch(err) {
            localStorage.removeItem("user");
            window.location.assign("/login");
        }
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
                            <td key={(index + 3) + (this.state.active - 1) * 5}>Rp{item.loanAmount}</td>
                            <td key={(index + 4) + (this.state.active - 1) * 5}>{item.loanLength} Bulan</td>
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