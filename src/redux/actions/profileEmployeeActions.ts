import {Dispatch} from "react";
import ApiService from '../../services/api'
import {createUpdateEmployeeProfileFormData} from "../../functions/createFormData";

export interface getProfileData {
    readonly type : 'GET_PROFILE_DATA'
    payload : any
}
export interface setProfileInProgress {
    readonly type : 'SET_PROFILE_IN_PROGRESS',
    payload : boolean,
}






export type ProfileActions =
    | getProfileData
    | setProfileInProgress


export const onGetProfileData = () => {
    return async (dispatch : Dispatch<ProfileActions>) => {
        try {
            dispatch({type:'SET_PROFILE_IN_PROGRESS',payload:true})
            const response = await ApiService.get('profile/employee',{});
            console.log(response);
            setTimeout(() =>dispatch({type:'GET_PROFILE_DATA',payload:response}),1500)
        }
        catch (e) {
            console.log(e)
        }
        finally {
            setTimeout(() =>dispatch({type:'SET_PROFILE_IN_PROGRESS',payload:false}),1500)
        }
    }
}



export const onUpdateProfile = (values : any) => {
    return async(dispatch : Dispatch<ProfileActions>) =>{
        try {
            dispatch({type:'SET_PROFILE_IN_PROGRESS',payload:true})
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
            setTimeout(() =>dispatch({type:'SET_PROFILE_IN_PROGRESS',payload:false}),1500)
        }
    }
}
