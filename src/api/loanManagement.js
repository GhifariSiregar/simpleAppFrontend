import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export class LoanManagement {
    
    //GET ALL USER LOAN LIST
    getLoanList(active_page) {
        return new Promise(async (resolve, reject) => {
            let data = [];
            let page = [];

            let payload = {
                "no": active_page
            }
            let headers = {
                'headers': {
                    'Authorization': `token ${localStorage.getItem("user")}`
                }
            }
            await axios.post(URL + 'user/dashboard', payload, headers)
            .then(function(result) {
                result.data.data.forEach(function(dasdata) {
                    data.push({
                        invoice: dasdata.invoice,
                        loanAmount: dasdata.loan_amount,
                        loanLength: dasdata.loan_length,
                        status: dasdata.status
                    })
                })
    
                for (let number = 1; number <= result.data.pagination; number++) {
                    page.push(number);
                }

                resolve({
                    "listOfLoan": data,
                    "pagination": page
                });
            })
            .catch(function(err) {
                reject(err);
            })
        })
    }

    //GET LOAN DETAIL
    getLoanDetail(id) {
        return new Promise(async (resolve, reject) => {
            let headers = {
                'headers': {
                    'Authorization': `token ${localStorage.getItem("user")}`
                }
            }
            await axios.post(URL + "user/loandetail?id=" + id, {}, headers)
            .then(function(result) {
                resolve({
                    "loan_amount": result.data.data.loan_amount,
                    "loan_length": result.data.data.loan_length
                });
            })
            .catch(function(err) {
                reject(err);
            })
        })
    }

    //SUBMIT NEW LOAN
    submitNewLoan(loan_amount, loan_length, endpoint_submit) {
        return new Promise(async (resolve, reject) => {
            try {
                if(loan_amount === "" || loan_length === "") {
                    resolve(alert("Please fill the form first"));
                }
                else if(loan_amount < 1000000 || loan_amount > 10000000) {
                    resolve(alert("Loan Amount must be between Rp1.000.000 - Rp10.000.000"));
                }
                else if(loan_length < 1 || loan_length > 12) {
                    resolve(alert("Loan Length must be between 1 - 12 month(s)"));
                }
                else {
                    let headers = {
                        'headers': {
                            'Authorization': `token ${localStorage.getItem("user")}`
                        }
                    }
                    const payload = {
                        token: localStorage.getItem("user"),
                        loanAmount: loan_amount,
                        loanLength: loan_length
                    }
                    await axios.post(endpoint_submit, payload, headers)
                    .then(function() {
                        resolve(window.location.assign("/user/dashboard"));
                    })
                }
            }
            catch(err) {
                reject(err);
            }
        })
    }
}

export const loanManagement = new LoanManagement();