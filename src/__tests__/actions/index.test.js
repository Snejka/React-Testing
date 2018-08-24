import moxios from 'moxios';

import { saveComment, fetchComments } from 'actions';
import { ADD_COMMENT, FETCH_COMMENTS } from 'actions/types';

describe('saveComment', () => {
    let action;
    const payload = 'Comment to test Action';

    beforeEach(() => {
        action = saveComment(payload);
    });

    it('has a correct type', () => {
        expect(action.type).toEqual(ADD_COMMENT);
    });

    it('has a correct payload', () => {
        expect(action.payload).toEqual(payload);
    });
});

describe('fetchComments', () => {
    let action;
    const urlToListenFor = 'http://jsonplaceholder.typicode.com/comments';
    const mockedResponce = {
        status: 200,
        response: [
            { name: 'Fetched #1' },
            { name: 'Fetched #2' },
            { name: 'Fetched #3' }
        ]
    }

    beforeEach(() => {
        moxios.install();
        moxios.stubRequest(urlToListenFor, mockedResponce);

        action = fetchComments();
    });

    afterEach(() => {
        moxios.uninstall();
    })

    it('has a correct type', () => {
        expect(action.type).toEqual(FETCH_COMMENTS);
    });
});
