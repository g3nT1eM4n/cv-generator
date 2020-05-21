import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

namespace Global {
  export type State = {
    router: RouterState;
  }
}

const Global = (history: History) => combineReducers<Global.State>({
  router: connectRouter(history)
});

export default Global;
