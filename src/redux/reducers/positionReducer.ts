import {PositionActions} from '../actions/positionActions';


type PositionState = {
    inProgress : boolean,
    
    inProgressPositionsMain : boolean,
    PositionsMain : any[],

    search : string,
    positionsSearch : any[],
    inProgressPositionSearch : boolean
}

const intialState = {
    inProgress : false,
    search : '',
    inProgressPositionsMain : false,
    PositionsMain : [],

    positionsSearch : [],
    inProgressPositionSearch : false
}

const PositionReducer = (state : PositionState = intialState,action : PositionActions ) =>{
    switch (action.type) {
        case "SET_IN_PROGRESS_POSITION":
            return {
                ...state,
                inProgress : action.payload
            }
        case "SET_IN_PROGRESS_POSITION_MAIN":
            return{
                ...state,
                inProgressPositionsMain: action.payload
            }
        case "SEARCH_CHANGED":
            return {
                ...state,
                search : action.payload
            }
        case "SET_IN_PROGRESS_POSITIONS_SEARCH":
            return {
                ...state,
                inProgressProductsSearch : action.payload,
            }
        case "GET_POSITION_MAIN":
            return{
                ...state,
                PositionsMain: action.payload.positions
            }
        default:
            return state;
    }
}

export {PositionReducer};