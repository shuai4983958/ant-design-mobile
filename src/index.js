import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore,applyMiddleware  } from 'redux';
import rootReducer from '../src/pages/reducers/rootReducer.js';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../src/pages/saga/rootSaga.js';
import createLogger from 'redux-logger';

import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
} from 'react-router-dom'
const sagaMiddleware = createSagaMiddleware(rootSaga)

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware,createLogger)
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
)