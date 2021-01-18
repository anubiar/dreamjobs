import {Dispatch} from "react";
import ApiService from '../../services/api'

export interface LogoutReset {
    readonly type : 'USER_LOGOUT_RESET',
    payload : undefined,
}

export interface RememberMe {
    readonly type : 'SET_REMEMBER_ME',
    payload : boolean
}

export interface GetAllCompanyTypes{
    readonly type : "GET_ALL_COMPANY_TYPES",
    payload: any[]
}

export interface SetLoadingCompanyTypes{
    readonly type: "SET_LOADING_COMPANY_TYPES",
    payload: boolean
}   

export interface GetAllLanguages{
    readonly type: "GET_ALL_LANGUAGES",
    payload: any[]
}

export interface SetLoadingAllLanguages{
    readonly type: "SET_LOADING_LANGUAGES",
    payload: boolean
}

export interface GetAllLanguageLevels{
    readonly type: "GET_ALL_LANGUAGE_LEVELS",
    payload: any[]
}

export interface SetLoadingAllLanguageLevels{
    readonly type: "SET_LOADING_ALL_LANGUAGE_LEVELS",
    payload: boolean
}

export interface GetAllGenders{
    readonly type: "GET_ALL_GENDERS",
    payload: any[]
}

export interface SetLoadingAllGenders{
    readonly type: "SET_LOADING_GENDERS",
    payload: boolean
}

export interface SetLoadingAllCategories{
    readonly type : "SET_LOADING_ALL_CATEGORIES",
    payload : boolean,
}


export type generalActions =
    | LogoutReset
    | RememberMe
    | GetAllCompanyTypes
    | SetLoadingCompanyTypes
    | GetAllLanguages
    | SetLoadingAllLanguages
    | GetAllLanguageLevels
    | SetLoadingAllLanguageLevels
    | SetLoadingAllGenders
    | GetAllGenders


export const onLogout = () => {
    return async(dispatch : Dispatch<generalActions>) => {
        dispatch({type:'USER_LOGOUT_RESET',payload:undefined})
    }
}

export const onRememberMe = (payload : boolean) => {
    return async(dispatch: Dispatch<generalActions>) => {
        dispatch({type:'SET_REMEMBER_ME',payload})
    }
}

export const onGetAllCompanyTypes = () => {
    return async (dispatch : Dispatch<generalActions>) => {
        try {
            dispatch({type:"SET_LOADING_COMPANY_TYPES",payload:true});
            const response = await ApiService.get("general/companytypes",{});
            setTimeout(()=> dispatch({type:"GET_ALL_COMPANY_TYPES",payload:response.data}),1500)
        } catch (e) {
            console.log(e);
        }
        finally{
            setTimeout(() => dispatch({type:"SET_LOADING_COMPANY_TYPES",payload:false}),1500); 
        }
    }
}

export const onGetAllLanguages = () => {
    return async (dispatch : Dispatch<generalActions>) => {
        try {
            dispatch({type:"SET_LOADING_LANGUAGES",payload:true});
            const response = await ApiService.get("general/languages",{});
            setTimeout(() => dispatch({type:"GET_ALL_LANGUAGES",payload:response.data}));

        } catch (e) {
            
        }
        finally{
            setTimeout(() => dispatch({type:"SET_LOADING_LANGUAGES",payload:false}),1500);
        }
    }
}

export const onGetAllGenders = () => {
    return async (dispatch : Dispatch<generalActions>) => {
        try {
            dispatch({type:"SET_LOADING_GENDERS",payload:true});
            const response = await ApiService.get("general/genders",{});
            setTimeout(() => dispatch({type:"GET_ALL_GENDERS",payload: response.data}),1500);


        } catch (e) {
            console.log(e);
        }
        finally{
            setTimeout(() => dispatch({type:"SET_LOADING_GENDERS",payload:false}));
        }
    }
}

export const onGetAllLanguageLevels = () => {
    return async (dispatch : Dispatch<generalActions>) => {
        try {
            dispatch({type:"SET_LOADING_ALL_LANGUAGE_LEVELS",payload:true});
            const response = await ApiService.get("general/languagelevels",{});
            setTimeout(() => dispatch({type:"GET_ALL_LANGUAGE_LEVELS",payload: response.data}),1500);


        } catch (e) {
            console.log(e);
        }
        finally{
            setTimeout(() => dispatch({type:"SET_LOADING_ALL_LANGUAGE_LEVELS",payload:false}));
        }
    }
}


