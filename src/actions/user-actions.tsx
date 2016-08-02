import axios from 'axios'

export const
    GET_USERS = "GET_USERS",
    SET_USER_NAME = "SET_USER_NAME",
    GET_USERS_PENDING = "GET_USERS_PENDING",
    GET_USERS_REJECTED = "GET_USERS_REJECTED",
    GET_USERS_FULFILLED = "GET_USERS_FULFILLED";

export const getUser = () => ({
    type: GET_USERS,
    payload: axios.get('http://rest.learncode.academy/api/alpgiray/getusers').then(res => res.data)
})

export const setUserName = (name: String) => ({
    type: SET_USER_NAME,
    payload: name
})