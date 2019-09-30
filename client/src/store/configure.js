import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import * as modules from './modules';
import penderMiddleware from 'redux-pender';

const reducers = combineReducers(modules);
const middlewares = [ penderMiddleware() ];

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

const configure = (preloadState) =>
	createStore(reducers, preloadState, composeEnhancers(applyMiddleware(...middlewares)));

export default configure;
