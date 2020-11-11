import { ADD_IMAGE } from './actionTypes';

export function addImage(imageUrl) {
    return {
      type: ADD_IMAGE,
      payload: {
        imageUrl
      }
    }
};