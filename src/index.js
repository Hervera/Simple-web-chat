import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import allReducers from './redux/reducers';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

const persistConfig = {
  key: 'root',
  storage: storage,
  // whitelist: ['root'] // which reducer want to store
};

const persistedReducer = persistReducer(persistConfig, allReducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

const persistor = persistStore(store);
  


ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
       <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
