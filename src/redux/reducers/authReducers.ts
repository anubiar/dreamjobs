import {AuthActions} from "../actions/authActions";

type AuthState = {
    inProgress : boolean,
    isLogged : boolean,
    token : string | undefined,
    userType : string | undefined,
    error : string | undefined,
    errorRegister : any,
}

const initialState = {
    inProgress : false,
    isLogged : false,
    token : undefined,
    userType : undefined,
    error : undefined,
    errorRegister : undefined,
}

const AuthReducer = (state : AuthState = initialState,action : AuthActions) => {
    switch (action.type) {
        case 'ON_LOGIN' :{
            return {
                ...state,
                token : action.payload,
                isLogged: true,
                error:undefined,
            }
        }
        case "ON_LOGOUT":
            return {
                ...state,
                token : undefined,
                inProgress: false,
                isLogged: false,
            }
        case "SET_IN_PROGRESS":
            return {
                ...state,
                inProgress : action.payload
            }
        case "ON_ERROR":
            return {
                ...state,
                error : action.payload
            }
        case "ON_REGISTER":
            return {
                ...state,
                token: action.payload,
                isLogged: true,
            }
        case "ON_ERROR_REGISTER":
            return {
                ...state,
                errorRegister : action.payload
            }
        default :
            return state;
    }
}

export {AuthReducer}
