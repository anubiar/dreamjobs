import {Dispatch} from "react";
import { createUpdateEmployerProfileFormData } from "../../functions/createFormData";
import ApiService from '../../services/api'


export interface getEmployerProfileData{
    readonly type : 'GET_EMPLOYER_PROFILE_DATA',
    payload : {
        profile: any,
        positions: any[]
    }
}


export interface setEmployerProfileInProgress{
    readonly type : 'SET_EMPLOYER_PROFILE_IN_PROGRESS',
    payload: boolean
}

export interface setExistEmployerProfile{
    readonly type: 'SET_EXIST_EMPLOYER_PROFILE',
    payload: boolean
}

export interface setDeletePositionInProgress{
    readonly type: 'SET_DELETE_POSITION_IN_PROGRESS',
    payload:{
        inProgress:boolean,
        id : number | undefined
    }
}

export interface setNewProfilePositions{
    readonly type: 'SET_NEW_PROFILE_POSITIONS',
    payload: number
}


export type EmployerProfileActions =
    |getEmployerProfileData
    |setEmployerProfileInProgress
    |setExistEmployerProfile
    |setDeletePositionInProgress
    |setNewProfilePositions



export const onGetEmployerProfileData = () =>{
    return async (dispatch : Dispatch<EmployerProfileActions>) => {
        try {
            dispatch({type: 'SET_EMPLOYER_PROFILE_IN_PROGRESS',payload:true});
            const profile = await ApiService.get('profile/employer',{});
            const positions = await ApiService.get('vacantposition/current',{});
            console.log(positions);
            setTimeout(() => dispatch({type: 'GET_EMPLOYER_PROFILE_DATA',payload:{profile: profile.profile,positions: positions.positions}}),1500);
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

export const onDeletePosition = (id : number) => {
    return async (dispatch : Dispatch<EmployerProfileActions>) => {
        try {
            dispatch({type:"SET_DELETE_POSITION_IN_PROGRESS",payload:{inProgress:true,id}});
            const response = await ApiService.delete(`vacantposition/${id}`);
            setTimeout(() => dispatch({type: "SET_NEW_PROFILE_POSITIONS",payload:id}),1500);
        } catch (e) {
            console.log(e);
        }
        finally{
            setTimeout(() => dispatch({type: "SET_DELETE_POSITION_IN_PROGRESS",payload: {inProgress:false,id: undefined}}),1000);
        }
    }
}


