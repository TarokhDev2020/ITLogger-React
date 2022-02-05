import {GET_TECHS, SET_LOADING, TECHS_ERROR, ADD_TECH, DELETE_TECH} from './types';

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
};

export const getTechs = () => async dispatch => {
    try {
        setLoading();
        const response = await fetch('/techs');
        const data = await response.json();
        dispatch({
            type: GET_TECHS,
            payload: data
        })
    }
    catch (e) {
        dispatch({
            type: TECHS_ERROR,
            payload: e
        })
    }
};

export const addTech = (tech) => async dispatch => {
    try {
        setLoading();
        const response = await fetch('/techs', {
            method: "POST",
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        dispatch({
            type: ADD_TECH,
            payload: data
        });
    }
    catch (e) {
        dispatch({
            type: TECHS_ERROR,
            payload: e
        })
    }
};

export const deleteTech = id => async dispatch => {
    try {
        setLoading(true);
        await fetch(`/techs/${id}`, {
            method: "DELETE"
        });
        dispatch({
            type: DELETE_TECH,
            payload: id
        })
    }
    catch (e) {
        dispatch({
            type: TECHS_ERROR,
            payload: e
        })
    }
}