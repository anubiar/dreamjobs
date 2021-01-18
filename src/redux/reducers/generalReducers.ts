import {generalActions} from "../actions/generalActions";

type generalState = {
    rememberMe : boolean,
    isLoadingGenders: boolean,
    isLoadingLanguages: boolean,
    isLoadingLanguageLevels: boolean,
    isLoadingCompanyTypes: boolean,
    genders: any[],
    languages: any[],
    languageLeveles: any[],
    companyTypes: any[]
}

const initialState = {
    rememberMe : false,
    genders: [],
    languages: [],
    languageLeveles: [],
    companyTypes: [],
    isLoadingCompanyTypes: false,
    isLoadingGenders: false,
    isLoadingLanguageLevels: false,
    isLoadingLanguages: false
}

const GeneralReducer = (state :generalState = initialState,action:generalActions) => {
    switch (action.type) {
        case "SET_REMEMBER_ME":
            return{
                ...state,
                rememberMe: action.payload
            }
        case "GET_ALL_COMPANY_TYPES":
            return{
                ...state,
                companyTypes: action.payload
            }
        case "GET_ALL_GENDERS":
            return{
                ...state,
                genders: action.payload
            }
        case "GET_ALL_LANGUAGES":
            return{
                ...state,
                languages: action.payload
            }
        case "GET_ALL_LANGUAGE_LEVELS":
            return{
                ...state,
                languageLeveles: action.payload
            }
        case "SET_LOADING_ALL_LANGUAGE_LEVELS":
            return{
                ...state,
                isLoadingLanguageLevels: action.payload
            }
        case "SET_LOADING_COMPANY_TYPES":
            return{
                ...state,
                isLoadingCompanyTypes: action.payload
            }
        case "SET_LOADING_GENDERS":
            return{
                ...state,
                isLoadingGenders: action.payload
            }
        case "SET_LOADING_LANGUAGES":
            return{
                ...state,
                isLoadingLanguages: action.payload
            }
        default:
            return state;
    }
}

export {GeneralReducer}
