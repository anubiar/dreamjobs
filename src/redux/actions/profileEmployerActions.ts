import {Dispatch} from "react";
import { createUpdateEmployerProfileFormData } from "../../functions/createFormData";
import ApiService from '../../services/api'


export interface getEmployerProfileData{
    readonly type : 'GET_EMPLOYER_PROFILE_DATA',
    payload : any
}


export interface setEmployerProfileInProgress{
    readonly type : 'SET_EMPLOYER_PROFILE_IN_PROGRESS',
    payload: boolean
}

export interface setExistEmployerProfile{
    readonly type: 'SET_EXIST_EMPLOYER_PROFILE',
    payload: boolean
}

export interface setLoadingProfileImage{
    readonly type: 'SET_LOADING_PROFILE_IMAGE',
    payload: boolean
}

export interface getEmployerProfileImage{
    readonly type: "GET_EMPLOYER_PROFILE_IMAGE",
    payload: any
}


export type EmployerProfileActions =
    |getEmployerProfileData
    |setEmployerProfileInProgress
    |setExistEmployerProfile
    |setLoadingProfileImage
    |getEmployerProfileImage



export const onGetEmployerProfileData = () =>{
    return async (dispatch : Dispatch<EmployerProfileActions>) => {
        try {
            dispatch({type: 'SET_EMPLOYER_PROFILE_IN_PROGRESS',payload:true});
            const response = await ApiService.get('profile/employer',{});
            setTimeout(() => dispatch({type: 'GET_EMPLOYER_PROFILE_DATA',payload:response}),1500);
        } catch (e) {
            console.log(e);
        }
        finally{
           setTimeout(() => dispatch({type:'SET_EMPLOYER_PROFILE_IN_PROGRESS',payload: false}),1500) ;
        }
    }
}

export const onExistEmployerProfile = () => {
    return async (dispatch : Dispatch<EmployerProfileActions>) => {
        try {
            const response = await ApiService.get('profile/exist',{});
            setTimeout(() => dispatch({type: 'SET_EXIST_EMPLOYER_PROFILE',payload: response.employer}));
        } catch (e) {
            console.log(e);
        }
    }
}

export const onUpdateEmployerProfile = (values : any) => {
    return async (dispatch : Dispatch<EmployerProfileActions>) => {
        try {
            dispatch({type:"SET_EMPLOYER_PROFILE_IN_PROGRESS",payload: true});
            const formData = createUpdateEmployerProfileFormData(values);
            console.log(values);
            console.log(formData);
            const response = await ApiService.postFormData("profile/employer",formData);
        } catch (e) {
            console.log(e);
        }
        finally{
            setTimeout(() => dispatch({type:"SET_EMPLOYER_PROFILE_IN_PROGRESS",payload:false}),1500);
        }
    }


}

export const onGetEmployerImageProfile = (imagePath : any) => {
    return async(dispatch : Dispatch<EmployerProfileActions>) => {
        try {
            dispatch({type:"SET_LOADING_PROFILE_IMAGE",payload:true});
            const response = await ApiService.get(`profile/image/${imagePath}`,{});

        } catch (e) {
            console.log(e);
        }
        finally{
            setTimeout(() => dispatch({type: "SET_LOADING_PROFILE_IMAGE",payload: false}),1500);
        }
    }
}