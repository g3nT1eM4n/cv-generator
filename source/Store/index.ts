import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';

import RootReducer from './Reducer';
import RootEpic from './Epic';

export const history = createHashHistory();

const epicMiddleware = createEpicMiddleware();
const store = composeWithDevTools(
  applyMiddleware(
    epicMiddleware,
    routerMiddleware(history)
  )
)(createStore)(RootReducer(history));

epicMiddleware.run(RootEpic);

export default store;
