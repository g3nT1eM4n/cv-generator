import { createAction, PayloadAction } from 'typesafe-actions';
import Person from 'Types/Person';

export namespace setName {
  export type Payload = {
    name: Person.Name;
  }

  export type Type = PayloadAction<string, Payload>;
}

export const setName = createAction('cv-person/SET_NAME')<setName.Payload>();
