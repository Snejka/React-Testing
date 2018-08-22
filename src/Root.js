import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { rootReducer } from 'reducers';


export const Root = ({ children, initialState = {} }) => {

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxPromise)
    );

    return (
        <Provider store={store}>
            { children }
        </Provider>
    );
}

export default Root;
