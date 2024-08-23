import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';

const bindMiddleware = (middleWare) => {
    return applyMiddleware(...middleWare)
}

export const initializeStore = (initialState = {}) => {
    const middleWare = bindMiddleware([thunk]);
    const store = createStore(rootReducer, initialState, middleWare);
    return store;
}