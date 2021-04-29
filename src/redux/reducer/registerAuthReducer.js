const initialState = {
    name: "",
    ktp: "",
    occupancy: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: ""
}

export const registerAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_STATE_AUTH_REGISTER" : 
        return {
            ...action, ...action.payload
        }
        default : return state
    }
}