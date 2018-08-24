import { commentsReducer } from 'reducers/comments';
import { ADD_COMMENT, FETCH_COMMENTS } from 'actions/types';

it('handles acctions of type ADD_COMMENTS', () => {
    const action = {
       type: ADD_COMMENT,
       payload: 'Mocked Comment for Test The Reducer'
    }

    const newState = commentsReducer( [], action);

    expect(newState).toEqual([action.payload]);
});

it('handles acctions of type FETCH_COMMENTS', () => {
    const mockedResponce = { data: [{ name: 'Comment #1' }, { name: 'Comment #2' }] }
    const action = {
        type: FETCH_COMMENTS,
        payload: mockedResponce
    }

    const newState = commentsReducer([], action);

    expect(newState).toEqual(["Comment #1", "Comment #2"]);
});

it('handles acctions of unknown type', () => {
    const initialState = ['Test Comment in the State']
    const newState = commentsReducer(initialState, { type: 'qwertygfdszxcvg' });
    expect(newState).toEqual(initialState);
});
