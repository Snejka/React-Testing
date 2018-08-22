import { saveComment } from 'actions';
import { ADD_COMMENT } from 'actions/types';

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
