import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import App from 'components/App';
import Root from 'Root';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';


describe('App Component when Route is "/" ', () => {
    let wrapper;

    let initialState = {
        auth: false
    }

    beforeEach(() => {
        wrapper = mount (
            <MemoryRouter initialEntries={['/']}>
                <Root initialState={initialState}>
                    <App />
                </Root>
            </MemoryRouter>
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    describe('Navigation', () => {
        it('shows Navigation with Three list items', () => {
            const list = wrapper.find('.navigation');
            expect(list.length).toEqual(1);
            expect(list.type()).toEqual('ul');
            expect(list.children().length).toEqual(3);
        });

        it('render a button as in a list item with text "Log In"', () => {
            let button = wrapper.find('.btn-auth');
            expect(button.length).toEqual(1);
            expect(button.text()).toEqual('Log In');
        });

        it('should change button text on click', ()=> {
            expect(wrapper.find('.btn-auth').text()).toEqual('Log In');

            wrapper.find('.btn-auth').simulate('click');
            wrapper.update();

            expect(wrapper.find('.btn-auth').text()).toEqual('Log Out');
        });
    });

    it('renders a Comment List', () => {
        expect(wrapper.find(CommentList).length).toEqual(1);
    });

    it('should not show Comment Box', () => {
        expect(wrapper.find(CommentBox).length).toEqual(0);
    });
});

describe('App Component when Route is "/post" ', () => {
    let wrapper;

    let initialState = {
        auth: true
    }

    beforeEach(() => {
        wrapper = mount(
            <MemoryRouter initialEntries={['/post']}>
                <Root initialState={initialState}>
                    <App />
                </Root>
            </MemoryRouter>
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    describe('Navigation', () => {
        it('shows Navigation with Three list items', () => {
            const list = wrapper.find('.navigation');
            expect(list.length).toEqual(1);
            expect(list.type()).toEqual('ul');
            expect(list.children().length).toEqual(3);
        });

        it('render a button as in a list item with text "Log Out"', () => {
            let button = wrapper.find('.btn-auth');
            expect(button.length).toEqual(1);
            expect(button.text()).toEqual('Log Out');
        });

        it('should change button text on click', () => {
            expect(wrapper.find('.btn-auth').text()).toEqual('Log Out');

            wrapper.find('.btn-auth').simulate('click');
            wrapper.update();

            expect(wrapper.find('.btn-auth').text()).toEqual('Log In');
        });
    });

    it('renders a Comment List', () => {
        expect(wrapper.find(CommentList).length).toEqual(1);
    });

    it('should show Comment Box', () => {
        expect(wrapper.find(CommentBox).length).toEqual(1);
    });
});
