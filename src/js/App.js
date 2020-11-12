import React from 'react';
import Pages from  './pages/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './js/redux/reducers';
import initialState from './js/redux/initialState';

const store = createStore(reducers, initialState)

export default function App() {
    return (
        <Provider store={store}>
            <Pages.Slider />
            <Pages.Main />
        </Provider>
    );
}

// https://docs.google.com/document/d/1w2nI_h-93wQT9uzlgnMtN2HtUu7-lIm91YLJ5dMCvkU/edit