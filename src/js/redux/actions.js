import { ADD_IMAGE } from './actionTypes';

export const addImage = (content) => ({
    type: ADD_IMAGE,
    payload: {
      content
    }
});