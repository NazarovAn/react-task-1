import { SET_IMAGE } from './actionTypes';

export default function reducers(state = {}, action) {
    switch (action.type) {
      case SET_IMAGE:
        return { ...state, images: action.images}
      default:
        return state
    }
}