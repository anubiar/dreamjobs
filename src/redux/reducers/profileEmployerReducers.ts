import {EmployerProfileActions} from '../actions/profileEmployerActions';



type EmployerProfileState = {
    inProgress: boolean,
    inProgressProfileImage: boolean,
    nameCompany : string,
    id: number,
    email : string,
    companyPhone: string,
    companyAdress: string,
    fiscalCode : string,
    positions : any[],
    imagePath : string | undefined,
    existEmployerProfile : boolean,
    profileImage: any
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
    existEmployerProfile: false,
    inProgressProfileImage : false,
    profileImage: undefined
}

const ProfileEmployerReducer = (state : EmployerProfileState = initialState,action : EmployerProfileActions) =>{
    switch (action.type) {
        case "GET_EMPLOYER_PROFILE_DATA":
            return{
                ...state,
                nameCompany: action.payload.profile.compania,
                id: action.payload.profile.employerProfileId,
                // email: action.payload.email,
                companyAdress: action.payload.profile.companyAdress,
                companyPhone: action.payload.profile.companyPhone,
                fiscalCode: action.payload.profile.codFiscal,
                imagePath: action.payload.profile.imagePath
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
        case "SET_LOADING_PROFILE_IMAGE":
            return{
                ...state,
                inProgressProfileImage: action.payload
            }
        case "GET_EMPLOYER_PROFILE_IMAGE":
            return{
                ...state,
                profileImage: action.payload
            }
        
        default:
            return{
                ...state
            }
    }
}

export {ProfileEmployerReducer};