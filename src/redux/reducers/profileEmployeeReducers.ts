import { string } from "yup/lib/locale";
import {EmployeeProfileActions} from "../actions/profileEmployeeActions";

type EmployeeProfileState = {
    inProgress : boolean,
    id : number | undefined,
    email: string,
    name : string,
    phone : string,
    imagePath : string | undefined,
    lastName : string,
    birthDate : Date | undefined,
    gender : number,
    adress : string,
    languages : any[],
    education : any,
    experience : any,
    skills : any[],
    existEmployeeProfile : boolean
}

const initialState = {
    inProgress: false,
    id: undefined,
    email : '',
    name: '',
    phone: '',
    imagePath : undefined,
    lastName : '',
    birthDate : undefined,
    gender : 0,
    adress : '',
    languages : [],
    education : undefined,
    experience : undefined,
    skills : [],
    existEmployeeProfile : false
}

const ProfileEmployeeReducer = (state : EmployeeProfileState = initialState,action : EmployeeProfileActions) =>{
    switch (action.type) {
        case "SET_EMPLOYEE_PROFILE_IN_PROGRESS":
            return {
                ...state,
                inProgress:action.payload
            }
        case "GET_EMPLOYEE_PROFILE_DATA":
            return {
                ...state,
                email:action.payload.email,
                id : action.payload.id,
                name : action.payload.name,
                lastName :action.payload.lastName,
                adress : action.payload.adress,
                phone : action.payload.phone,
                imagePath : action.payload.imagePath,
                birthDate : action.payload.birthDate,
                experience : action.payload.experience,
                education : action.payload.education,
                skills : action.payload.skills,
                languages : action.payload.languages
            }
        case "SET_EXIST_EMPLOYEE_PROFILE":
            return{
                ...state,
                existEmployeeProfile: action.payload
            }

        default:
            return state
    }
}

export {ProfileEmployeeReducer}
