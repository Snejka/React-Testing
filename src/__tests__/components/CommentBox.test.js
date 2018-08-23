import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapper;
const initialState = {
    auth: true
}

beforeEach(() => {
    wrapper = mount (
        <Root initialState={initialState}>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapper.unmount();
});

it('has a textarea and two button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(2);
});

describe('the text area', () => {

    const eventMock = { target: { value: 'mocked comment' } };

    beforeEach(() => {
        wrapper.find('textarea').simulate('change', eventMock);
        wrapper.update();
    });

    it('has a text area where user can type in', () => {
        expect(wrapper.find('textarea').prop('value')).toEqual(eventMock.target.value);
    });

    it('simulates form submit and checks input state', () => {
        wrapper.find('form').simulate('submit');
        wrapper.update();
        expect(wrapper.find('textarea').prop('value')).toEqual('');
    });
});


