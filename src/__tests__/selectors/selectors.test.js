import { getComments, getAuthState } from 'selectors/selectors';

describe('getComments Selector', () => {
    it('should return empty array if "store" has not contain "comments"', () => {
        const state = {};
        const selector = getComments(state);
        expect(selector).toEqual([]);
    });

    it('should return list of comments from the store', () => {
        const state = { comments: ['In Store #1', 'In Store #2']};
        const selector = getComments(state);
        expect(selector).toEqual(state.comments);
    })
});

describe('getAuthState Selector', () => {
    it('should return false as a value when "store" has not contain "auth"', () => {
        const state = {};
        const selector = getAuthState(state);
        expect(selector).toEqual(false);
    });

    it('should return "auth" state from the store', () => {
        const state = { auth: true };
        const selector = getAuthState(state);
        expect(selector).toEqual(state.auth);
    })
});
