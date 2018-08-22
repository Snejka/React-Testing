import { commentsReducer } from 'reducers/comments';
import { ADD_COMMENT } from 'actions/types';

it('handles acctions of type ADD_COMMENTS', () => {
    const action = {
       type: ADD_COMMENT,
       payload: 'Mocked Comment for Test The Reducer'
    }

    const newState = commentsReducer( [], action);

    expect(newState).toEqual([action.payload]);
});

it('handles acctions of unknown type', () => {
    const initialState = ['Test Comment in the State']
    const newState = commentsReducer(initialState, {type: 'qwertygfdszxcvg'});
    expect(newState).toEqual(initialState);
});
