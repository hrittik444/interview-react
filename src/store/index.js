import { createStore } from 'redux';
import rootReducer from './reducer';

export function configureStore() {
	const store = createStore(rootReducer);
	return store;
}