import {combineReducers} from "redux";
import {AuthReducer} from "./authReducers";
import {routerReducer} from "react-router-redux";
import {ProfileEmployeeReducer} from "./profileEmployeeReducers";
import storage from "redux-persist/lib/storage";
import {GeneralReducer} from "./generalReducers";
import { PositionReducer } from "./positionReducer";
import { ProfileEmployerReducer } from "./profileEmployerReducers";



const appReducer  = combineReducers({
    authReducer : AuthReducer,
    generalReducers : GeneralReducer,
    profileEmployeeReducers:ProfileEmployeeReducer,
    profileEmployerReducers : ProfileEmployerReducer,
    positionReducer : PositionReducer,
    routing:routerReducer,
})


const rootReducer = (state : any, action:any) => {
    if (action.type === 'USER_LOGOUT_RESET') {
        state = undefined
        storage.removeItem('persist:root')
    }

    return appReducer(state, action)
}

export type ApplicationState = ReturnType<typeof rootReducer >
export {rootReducer}
