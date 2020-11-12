import React from 'react';
import Main from './pages/main';
import Slider from './pages/slider';
import { Provider } from 'react-redux';
import initialState from './redux/initialState';

export default function App() {
    return (
        <Provider store={initialState}>
            <Slider />
            <Main />
        </Provider>
    );
}

// https://docs.google.com/document/d/1w2nI_h-93wQT9uzlgnMtN2HtUu7-lIm91YLJ5dMCvkU/edit