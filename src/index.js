import './scss/index.scss';
import './scss/components/_reset.scss';
import ReactDOM from 'react-dom';
import routes from './js/routes';

ReactDOM.render(
  routes(),
  document.getElementById('root')
);