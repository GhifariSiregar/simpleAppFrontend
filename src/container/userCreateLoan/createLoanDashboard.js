import React from "react";
import SideBar from "../../component/sidebar/sidebar";
import CreateLoan from "../../component/createLoan/createLoan";

class CreateLoanDashboard extends React.Component {
    render() {
        document.title = "Create a New Loan";
        return (
            <div className="d-flex justify-content-top">
                <SideBar />
                <div style={{width: "80vw", height: "90vh", display: "inline-block", padding: "20px"}}>
                    <CreateLoan />
                </div>
            </div>
        )
    }
}

export default CreateLoanDashboard;