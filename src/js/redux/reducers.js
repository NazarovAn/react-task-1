import { combineReducers } from 'redux';
import { ADD_IMAGE } from './actionTypes';

function images(state = [], action) {
    switch (action.type) {
      case ADD_IMAGE:
        return state.concat([action.imageURL])
      default:
        return state
    }
}

export const rootReducer = combineReducers({
    images,
})