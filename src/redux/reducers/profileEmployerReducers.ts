import {EmployerProfileActions} from '../actions/profileEmployerActions';



type EmployerProfileState = {
    inProgress: boolean,
    nameCompany : string,
    id: number | undefined,
    email : string,
    companyPhone: string,
    companyAdress: string,
    fiscalCode : string,
    positions : any[],
    imagePath : string | undefined,
    existEmployerProfile : boolean,
    formId : number | undefined,
    inProgressDeleting: boolean,
    deletingPositionId: number | undefined
}

const initialState ={
    inProgress : false,
    nameCompany: '',
    id: undefined,
    email: '',
    companyPhone: '',
    companyAdress: '',
    fiscalCode: '',
    imagePath: undefined,
    positions: [],
    existEmployerProfile: false,
    formId: 0,
    inProgressDeleting: false,
    deletingPositionId: undefined
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
                imagePath: action.payload.profile.imagePath,
                formId : action.payload.profile.formId,
                positions: action.payload.positions
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
        case "SET_DELETE_POSITION_IN_PROGRESS":
            return{
                ...state,
                inProgressDeleting: action.payload.inProgress,
                deletingPositionId: action.payload.id
            }
        case "SET_NEW_PROFILE_POSITIONS":
            return{
                ...state,
                positions: state.positions.filter(el => el.vacantPositionId !== action.payload)
            }
        
        
        default:
            return state
            
    }
}

export {ProfileEmployerReducer};