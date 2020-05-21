import { of, from, EMPTY } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { Epic, StateObservable } from 'redux-observable';
import Global from 'Store/Reducer';
import * as Action from 'Action/Person';

const setName: Epic = (
  action$,
  state$: StateObservable<Global.State>
) => (
  action$.pipe(
    filter(isActionOf(Action.setName)),
    switchMap(
      (action) => {
        const { payload } = action;

        

        return EMPTY;
      }
    )
  )
)
