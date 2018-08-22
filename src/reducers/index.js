import { combineReducers } from 'redux';
import { commentsReducer } from 'reducers/comments';

export const rootReducer = combineReducers({
    comments: commentsReducer,
})
