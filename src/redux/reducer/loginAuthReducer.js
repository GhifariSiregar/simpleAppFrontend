const initialState = {
    email: "",
    password: ""
}

export const loginAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_STATE_AUTH_LOGIN" : 
        return {
            ...action, ...action.payload
        }
        default : return state
    }
}