import React from 'react';
import store from '../redux/initialState';
import { addImage } from '../redux/actions';

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// function addImage(state = [], action) {
//   switch (action.type) {
//     case 'ADD_IMAGE':
//       return state.concat([action.imageURL])
//     default:
//       return state
//   }
// }

// const store = createStore(addImage, [], applyMiddleware(thunk))

async function getImages(url) {
    const resp = await fetch(url);
    const json = await resp.json();
    json.forEach((string) => {
        store.dispatch(addImage(string));
    })
}

getImages('https://imagesapi.osora.ru/');

setTimeout(() => console.log(store.getState()), 2000);

export default function Slider() {
    return (
        <div></div>
    )
}