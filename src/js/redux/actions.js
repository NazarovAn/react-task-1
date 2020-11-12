import { SET_IMAGE } from './actionTypes';

export function setImages(imageUrl) {
    return {
      type: SET_IMAGE,
      imageUrl
    }
};