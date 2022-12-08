import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from '@src/components/App';
import rootReducer from './store/reducers/rootReducer';
import rootSaga from './store/sagas/rootSaga';
import GlobalStyle from './styled';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <GoogleOAuthProvider clientId="933074410376-q8bcjeac76bgm222vchl0hph56um07ob.apps.googleusercontent.com">
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
    ,
  </GoogleOAuthProvider>,
);
