import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import Person from './CV/Person';

namespace Global {
  export type State = {
    router: RouterState;
    Person: Person.State;
  }
}

const Global = (history: History) => combineReducers<Global.State>({
  router: connectRouter(history),
  Person
});

export default Global;
