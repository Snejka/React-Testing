import axios from 'axios';
import { ADD_COMMENT, FETCH_COMMENTS } from 'actions/types';

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
