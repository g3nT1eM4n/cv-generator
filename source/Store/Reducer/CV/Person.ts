import { createReducer } from 'typesafe-actions';
import Person from 'Types/Person';
import * as Action from 'Action/Person';

namespace Reducer {
  export type State = {
    name: Person.Name;
  }
}

const initialState: Reducer.State = {
  name: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

const Reducer = createReducer(initialState)
  .handleAction(
    Action.setName,
    (
      state: Reducer.State,
      action: Action.setName.Type
    ): Reducer.State => ({
      ...state,
      name: action.payload.name
    })
  );

export default Reducer;
