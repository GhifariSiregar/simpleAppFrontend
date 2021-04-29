import React from "react";
import SideBar from "../../component/sidebar/sidebar";
import LoanList from "../../component/loanList/loanList";

class Dashboard extends React.Component {
    render() {
        document.title = "User Dashboard";
        return (
            <div className="d-flex justify-content-top">
                <SideBar />
                <div style={{width: "80vw", height: "90vh", display: "inline-block", padding: "20px"}}>
                    <LoanList />
                </div>
            </div>
        )
    }
}

export default Dashboard;