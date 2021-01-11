import { string } from "yup/lib/locale";
import {ProfileActions} from "../actions/profileEmployeeActions";

type ProfileState = {
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
    skills : any[]
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
    skills : []
}

const ProfileEmployeeReducer = (state : ProfileState = initialState,action : ProfileActions) =>{
    switch (action.type) {
        case "SET_PROFILE_IN_PROGRESS":
            return {
                ...state,
                inProgress:action.payload
            }
        case "GET_PROFILE_DATA":
            return {
                ...state,
                email:action.payload.email,
                id : action.payload.id,
                name : action.payload.name,
                lastName :action.payload.lastname,
                adress : action.payload.lastname,
                phone : action.payload.phone,
                imagePath : action.payload.imagePath,
                birthDate : action.payload.birthDate,
                experience : action.payload.experience,
                education : action.payload.education,
                skills : action.payload.skills,
                languages : action.payload.languages
            }
        

        default:
            return state
    }
}

export {ProfileEmployeeReducer}
