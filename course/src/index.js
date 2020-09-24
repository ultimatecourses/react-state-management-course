import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './current/App';

/* 
  View the reference code for each lesson
  Uncomment the line below, and comment out line #4
*/

//import {App} from './01-useState/App'
//import {App} from './02-useReducer/App'
//import {App} from './03-useContext/App'
//import {App} from './04-useEffect/App'
//import {App} from './05-encapsulate-state/App'
//import {App} from './06-useNetwork/App'
//import {App} from './07-useStorage/App'
//import {App} from './11-whats-app/App'
//import {App} from './12-whats-app-reducer/App'
//import {AppContainer as App} from './13-whats-app-context/App'
//import {AppContainer as App} from './14-whats-app-quote-message/App'
//import {AppContainer as App} from './15-compose-components/App'
//import {AppContainer as App} from './16-recoil/App'
//import {App} from './17-xstate/App'
//import {AppContainer as App} from './18-redux/App'
//import {AppContainer as App} from './19-apollo/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
