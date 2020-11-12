import { SET_IMAGE } from './actionTypes';

export function setImages(imageUrl) {
  console.log('--------------\nactions imageUrl');

  const test = {
    type: SET_IMAGE,
    images: imageUrl
  }

  console.log('setImages return');
  console.log(test);
    return test
};