import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapper;

const initialState = {
    comments: ['Comment 1', 'Comment 2']
}

beforeEach(() => {
    wrapper = mount(<Root initialState={initialState}>
                        <CommentList />
                    </Root>);
});

it('creates one <li /> per comment', () => {
    expect(wrapper.find('li').length).toEqual(initialState.comments.length);
});

it('shows correct text for each comment', () => {
    wrapper.find('li').forEach((node, i) => {
        expect(node.text()).toEqual(initialState.comments[i]);
    });
});
