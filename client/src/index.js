import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { Provider} from 'react-redux'
import {legacy_createStore as createStore} from 'redux'
// createStore has been deprecated-> now is configureStore
// import { configureStore } from '@reduxjs/toolkit'
import {combineReducers, applyMiddleware} from 'redux' 
import thunk from 'redux-thunk'
import productsReducer from './Reducers/ProductsReducer'


// only have one reducer for now--> for GET request
const rootReducer = combineReducers({
    products : productsReducer
  })
  console.log(rootReducer)
  
// The redux-thunk middleware gives the ability for actions to be asynchronous, as is the case here when calling an API.
// If you're using our official Redux Toolkit package as recommended, there's nothing to install - RTK's configureStore API already 
// adds the thunk middleware by default:
// const store = configureStore({reducer: rootReducer, middleware: [thunk]})
const store = createStore(rootReducer , applyMiddleware(thunk))
console.log(store)


ReactDOM.render( 
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);








// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
