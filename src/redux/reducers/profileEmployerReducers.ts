import {EmployerProfileActions} from '../actions/profileEmployerActions';



type EmployerProfileState = {
    inProgress: boolean,
    nameCompany : string,
    id: number,
    email : string,
    companyPhone: string,
    companyAdress: string,
    fiscalCode : string,
    positions : any[],
    imagePath : string | undefined,
    existEmployerProfile : boolean
}

const initialState ={
    inProgress : false,
    nameCompany: '',
    id: 0,
    email: '',
    companyPhone: '',
    companyAdress: '',
    fiscalCode: '',
    imagePath: undefined,
    positions: [],
    existEmployerProfile: false
}

const ProfileEmployerReducer = (state : EmployerProfileState = initialState,action : EmployerProfileActions) =>{
    switch (action.type) {
        case "GET_EMPLOYER_PROFILE_DATA":
            return{
                ...state,
                nameCompany: action.payload.nameCompany,
                id: action.payload.id,
                email: action.payload.email,
                companyAdress: action.payload.companyAdress,
                companyPhone: action.payload.companyPhone,
                fiscalCode: action.payload.fiscalCode,
                imagePath: action.payload.imagePath
            }
        case  "SET_EMPLOYER_PROFILE_IN_PROGRESS":
            return{
                ...state,
                inProgress: action.payload
            }
        
        case "SET_EXIST_EMPLOYER_PROFILE":
            return{
                ...state,
                existEmployerProfile: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export {ProfileEmployerReducer};