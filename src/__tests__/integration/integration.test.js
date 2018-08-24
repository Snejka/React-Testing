import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

let wrapper;

beforeEach(() => {
    const initialState = { auth: true }

    moxios.install();
    const urlToListenFor = 'http://jsonplaceholder.typicode.com/comments';
    const mockedResponce = {
        status: 200,
        response: [
            { name: 'Fetched #1' },
            { name: 'Fetched #2' },
            { name: 'Fetched #3' }
        ]
    }
    moxios.stubRequest(urlToListenFor, mockedResponce);
    wrapper = mount(
        <MemoryRouter initialEntries={['/post']}>
            <Root initialState={initialState}>
                <App />
            </Root>
        </MemoryRouter>
    );
});
afterEach(() => {
    moxios.uninstall();
    wrapper.unmount();
})
it('can fetch a list a comments and list them', (done) => {
    wrapper.find('.fetch-comments').simulate('click');
    wrapper.update();

    moxios.wait(() => {
        expect(wrapper.find('li').length).toEqual(3);
        done();
    });
});
