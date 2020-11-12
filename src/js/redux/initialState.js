import { rootReducer } from './reducers';
import { createStore } from 'redux';

// const initialState = {
//     images: [
//         'https://imagesapi.osora.ru/images/0.jpg',
//         'https://imagesapi.osora.ru/images/1.jpg',
//         'https://imagesapi.osora.ru/images/2.jpg',
//     ]
// }

const initialState = {
    images: []
}

const store = createStore(rootReducer, initialState)

export default store;