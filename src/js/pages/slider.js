import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function image(state = [], action) {
  switch (action.type) {
    case 'ADD_IMAGE':
      return state.concat([action.imageURL])
    default:
      return state
  }
}

const store = createStore(image, [], applyMiddleware(thunk))

async function getImages(url) {
    const resp = await fetch(url);
    const json = await resp.json();
    json.forEach((url) => {
        store.dispatch({
            type: 'ADD_IMAGE',
            imageURL: url
        })
    })
}

getImages('https://imagesapi.osora.ru/');


export default function Slider() {
    return (
        <div></div>
    )
}