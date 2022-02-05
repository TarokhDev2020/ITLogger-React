import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG} from '../actions/types';

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            }
            
        case LOGS_ERROR:
            return {
                ...state,
                error: action.payload,
            }

        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            }
            
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload),
                loading: false
            }
            
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
            
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
            
        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
            }    
            
        default:
            return state    
    }
};
