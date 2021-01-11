import {Dispatch} from 'react';
import ApiService from '../../services/api';
import { PostVacantPosition } from "../types/vacantPositionTypes";


export interface PostPosition{
    readonly type : 'POST_POSITION'
    payload : any
}

export interface SetInProgresPosition{
    readonly type : 'SET_IN_PROGRESS_POSITION'
    payload : boolean
}

export interface GetPositionsMain{
    readonly type : 'GET_POSITION_MAIN'
    payload : any
}

export interface SetInProgressPositionsMain {
    readonly type : 'SET_IN_PROGRESS_POSITION_MAIN',
    payload : boolean,
}

export interface SetInProgressPositionsSearch {
    readonly type: 'SET_IN_PROGRESS_POSITIONS_SEARCH',
    payload : boolean,
}

export interface GetPositionsBySearch {
    readonly type: 'GET_POSITIONS_BY_SEARCH',
    payload: any,
}

export interface SearchChanged {
    readonly type: 'SEARCH_CHANGED',
    payload : string
}

export type PositionActions = 
|PostPosition
|SetInProgresPosition
|GetPositionsMain
|SetInProgressPositionsMain
|SetInProgressPositionsSearch
|GetPositionsBySearch
|SearchChanged


export const onPostPosition  = (values : PostVacantPosition) => {
    return async(dispatch : Dispatch<PositionActions>) => {
        try {
            dispatch({type:'SET_IN_PROGRESS_POSITION',payload:true})
            console.log(values)
            const response =await ApiService.post('vacantposition',values)
            console.log(response)
        }
        catch (e) {
            console.log(e)
        }
        finally {
            setTimeout(() => dispatch({type:'SET_IN_PROGRESS_POSITION',payload:false}),1500)
        }
    }
}

export const onGetPositionsMain = () =>{
    return async(dispatch : Dispatch<PositionActions>) => {
        try {
            dispatch({type:'SET_IN_PROGRESS_POSITION_MAIN',payload:true})
            const response = await ApiService.get('vacantposition',{});
            console.log(response);
            setTimeout(() => dispatch({type:'GET_POSITION_MAIN',payload:response}),1500)
        }
        catch (e) {
            console.log(e);
        }
        finally {
            setTimeout(() =>dispatch({type:'SET_IN_PROGRESS_POSITION_MAIN',payload:false}),1500)
        }
    }
}