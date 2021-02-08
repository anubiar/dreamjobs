import {Dispatch} from "react";
import ApiService from '../../services/api'
import {createUpdateEmployeeProfileFormData} from "../../functions/createFormData";

export interface getEmployeeProfileData {
    readonly type : 'GET_EMPLOYEE_PROFILE_DATA'
    payload : any
}
export interface setEmployeeProfileInProgress {
    readonly type : 'SET_EMPLOYEE_PROFILE_IN_PROGRESS',
    payload : boolean,
}


export interface existEmployeeProfile{
    readonly type : "SET_EXIST_EMPLOYEE_PROFILE",
    payload : boolean
}



export type EmployeeProfileActions =
    | getEmployeeProfileData
    | setEmployeeProfileInProgress
    | existEmployeeProfile


export const onGetEmployeeProfileData = () => {
    return async (dispatch : Dispatch<EmployeeProfileActions>) => {
        try {
            dispatch({type:'SET_EMPLOYEE_PROFILE_IN_PROGRESS',payload:true})
            const response = await ApiService.get('profile/employee',{});
            console.log(response);
            setTimeout(() =>dispatch({type:'GET_EMPLOYEE_PROFILE_DATA',payload:response}),1500)
        }
        catch (e) {
            console.log(e)
        }
        finally {
            setTimeout(() =>dispatch({type:'SET_EMPLOYEE_PROFILE_IN_PROGRESS',payload:false}),1500)
        }
    }
}

export const onExistEmployeeProfile = () => {
    return async (dispatch : Dispatch<EmployeeProfileActions>) => {
        try{
            const response = await ApiService.get('profile/exist',{});
            setTimeout(() => dispatch({type: 'SET_EXIST_EMPLOYEE_PROFILE',payload: response.employee}))
        }
        catch(e){
            console.log(e);
        }
    }
}



export const onUpdateProfile = (values : any) => {
    return async(dispatch : Dispatch<EmployeeProfileActions>) =>{
        try {
            dispatch({type:'SET_EMPLOYEE_PROFILE_IN_PROGRESS',payload:true})
            const formData = createUpdateEmployeeProfileFormData(values)
            console.log(values)
            console.log(formData);
            const response = await ApiService.postFormData('me/update',formData)
            console.log(response)
        }
        catch (e) {
            console.log(e);
        }
        finally {
            setTimeout(() =>dispatch({type:'SET_EMPLOYEE_PROFILE_IN_PROGRESS',payload:false}),1500)
        }
    }
}

export const onCreateProfile = (values : any) => {
    return async(dispatch : Dispatch<EmployeeProfileActions>) =>{
        try {
            dispatch({type:'SET_EMPLOYEE_PROFILE_IN_PROGRESS',payload:true})
            const formData = createUpdateEmployeeProfileFormData(values)
            console.log(values)
            console.log(formData);
            const response = await ApiService.postFormData('employee',formData)
            console.log(response)
        }
        catch (e) {
            console.log(e);
        }
        finally {
            setTimeout(() =>dispatch({type:'SET_EMPLOYEE_PROFILE_IN_PROGRESS',payload:false}),1500)
        }
    }
}