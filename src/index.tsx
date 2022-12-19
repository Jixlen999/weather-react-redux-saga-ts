import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from '@src/components/App';
import rootReducer from './store/reducers/rootReducer';
import rootSaga from './store/sagas/rootSaga';

import GlobalStyle from './styled';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
);
