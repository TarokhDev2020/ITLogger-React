import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG} from './types';

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
};

export const getLogs = () => async dispatch => {
    try {
        setLoading();
        const response = await fetch('/logs');
        const data = await response.json();
        dispatch({
            type: GET_LOGS,
            payload: data
        })
    }
    catch (e) {
        dispatch({
            type: LOGS_ERROR,
            payload: e
        })
    }
}

export const addLog = (log) => async dispatch => {
    try {
        setLoading();
        const response = await fetch('/logs', {
            method: "POST",
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        dispatch({
            type: ADD_LOG,
            payload: data
        })
    }
    catch (e) {
        dispatch({
            type: LOGS_ERROR,
            payload: e
        })
    }
};

export const deleteLog = id => async dispatch => {
    try {
        setLoading();
        await fetch(`/logs/${id}`, {
            method: "DELETE"
        });
        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    }
    catch (e) {
        dispatch({
            type: LOGS_ERROR,
            payload: e
        })
    }
};

export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

export const updateLog = log => async dispatch => {
    try {
        setLoading();
        const response = await fetch(`/logs/${log.id}`, {
            method: "PUT",
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        dispatch({
            type: UPDATE_LOG,
            payload: data
        })
    }  
    catch (e) {
        dispatch({
            type: LOGS_ERROR,
            payload: e
        })
    }
}