import { ADD_COMMENT, FETCH_COMMENTS } from 'actions/types';

export const commentsReducer = (state = [], action) => {
    if (action.type === ADD_COMMENT) {
        return [ ...state, action.payload ]
    }
    if (action.type === FETCH_COMMENTS) {
        const comments = action.payload.data.map(comment => comment.name);//.slice(0, 5);
        return [...state, ...comments ]
    }
    return state;
}
