 import axios from 'axios';
import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from './type';

// const API_URL = "http://localhost:8000";
console.log(process.env.REACT_APP_DOMAIN);
export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_DOMAIN}/todos`, { data });

        dispatch({ type: ADDNEW_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling addNewTodo API ', error.message);
    }
}

export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_DOMAIN}/todos`);

        dispatch({ type: GETALL_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_DOMAIN}/todos/${id}`);

        dispatch({ type: TOGGLE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}

export const updateTodo = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`${process.env.REACT_APP_DOMAIN}/todos/${id}`, { data });

        dispatch({ type: UPDATE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling updateTodo API ', error.message);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${process.env.REACT_APP_DOMAIN}/todos/${id}`);

        dispatch({ type: DELETE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling deleteTodo API ', error.message);
    }
}

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({ type: TOGGLE_TAB, selected: tab })
}
