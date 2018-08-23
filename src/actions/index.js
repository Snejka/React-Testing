import axios from 'axios';
import { ADD_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';

export const saveComment = (comment) => {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}

export const fetchComments = () => {
    const responce = axios.get('http://jsonplaceholder.typicode.com/comments');

    return {
        type: FETCH_COMMENTS,
        payload: responce
    }
}

export const changeAuth = (isLogedIn) => {
    return {
        type: CHANGE_AUTH,
        payload: isLogedIn
    }
}
