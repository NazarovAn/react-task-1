import { SET_IMAGE } from './actionTypes';

export default function reducers(state = {}, action) {
  console.log('---------\nreducers action');
  console.log(action);
    switch (action.type) {
      case SET_IMAGE:
        console.log(action.images);
        return { ...state, images: action.images}
      default:
        return state
    }
}