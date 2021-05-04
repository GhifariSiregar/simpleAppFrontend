import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export class UsersAuthentication {
    userLogin(email, password) {
        return new Promise(async (resolve, reject) => {
            const payload = {
                email: email, 
                password: password
            }
    
            if(email === "" || password === "") {
                resolve(alert("Harap diisi"));
            }
            else {
                try {
                    await axios.post(URL + 'login', payload)
                    .then(function(result) {
                        localStorage.setItem("user", result.data.token);
                        resolve(window.location.assign("/user/dashboard"));
                    })
                }
                catch(err) {
                    reject(err)
                }
            }
        })
    }

    registerNewUser(new_user_data) {
        return new Promise(async (resolve, reject) => {
            try {
                if(!new_user_data.email || 
                   !new_user_data.password ||
                   !new_user_data.name ||
                   !new_user_data.gender ||
                   !new_user_data.address ||
                   !new_user_data.ktp ||
                   !new_user_data.occupancy ||
                   !new_user_data.confirmPassword) {

                    reject("'new_user_data' must contain email, password, name, gender, address, ktp, occupancy, and confirmPassword")
                }
                else if(new_user_data.email === "" || 
                        new_user_data.password === "" ||
                        new_user_data.name === "" ||
                        new_user_data.gender === "" ||
                        new_user_data.address === "" ||
                        new_user_data.ktp === "" ||
                        new_user_data.occupancy === "" ||
                        new_user_data.confirmPassword) {

                    resolve(alert("Harap diisi"));
                }
                else {
                    await axios.post(URL + 'register', new_user_data)
                    .then(function(result) {
                        localStorage.setItem("user", result.data.token);
                        resolve(window.location.assign("/user/dashboard"));
                    })
                }
            }
            catch(err) {
                reject(err);
            }
        })
    }

    logout() {
        return new Promise(async (resolve, reject) => {
            try {
                localStorage.removeItem("user");
                window.location.assign("/");

                let headers = {
                    'headers': {
                        'Authorization': `token ${localStorage.getItem("user")}`
                    }
                }
                await axios.post(URL + 'logout', {}, headers)
                .then(function() {
                    resolve(window.location.assign("/"));
                })
                .catch(function(err) {
                    reject(err);
                })
            }
            catch(err) {
                reject(err);
            }
        })
    }
}

export const usersAuthentication = new UsersAuthentication();