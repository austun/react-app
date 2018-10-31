import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/Reducer';
import createSagaMiddleware from 'redux-saga';
import sagas from './Sagas';

export default function configureStore() {

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(sagas);

    return store;
}
