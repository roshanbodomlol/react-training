import { createStore } from 'redux';
import rootReducer from './reducers';
import storeProvider from './storeProvider';

const configureStore = () => createStore(rootReducer);
storeProvider.init(configureStore);
const store = storeProvider.getStore();

export default store;
