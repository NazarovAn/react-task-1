import './scss/index.scss';
import './scss/components/_reset.scss';
import ReactDOM from 'react-dom';
import routes from './js/routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './js/redux/reducers';
import initialState from './js/redux/initialState';

const store = createStore(reducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    {routes()}
  </Provider>,
  document.getElementById('root')
);

// https://docs.google.com/document/d/1w2nI_h-93wQT9uzlgnMtN2HtUu7-lIm91YLJ5dMCvkU/edit
// https://docs.google.com/document/d/1uTt-NJajywNjMKCWZwr_i0KA-aQyBGd59jgJq4vnNDY/edit