import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

let wrapper;

beforeEach(() => {
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
    moxios.stubRequest( urlToListenFor, mockedResponce );

    wrapper = mount(<Root>
        <App />
    </Root>);
});

afterEach(() => {
    moxios.uninstall();
    wrapper.unmount();
})

it('can fetch a list a comments and list them', (done) => {

    wrapper.find('.fetch-comments').simulate('click');

    moxios.wait(() => {
        wrapper.update();
        expect(wrapper.find('li').length).toEqual(3);
        done();
    });
});
