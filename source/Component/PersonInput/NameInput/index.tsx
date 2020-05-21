import React from 'react';
import { Input } from 'rsuite';
import { connect } from 'react-redux';
import * as Action from 'Action/Person';
import Global from 'Store/Reducer';
import Person from 'Store/Reducer/CV/Person';

namespace NameInput {
  export type Props = {
    setName?: (payload: Action.setName.Payload) => void;
    Person?: Person.State;
  }
}

const NameInput: React.FC<NameInput.Props> = ({
  setName, Person
}) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  }}>
    <Input
      size='md'
      placeholder='First name'
      value={Person.name.firstName}
      onChange={firstName => {
        setName({
          name: {
            ...Person.name,
            firstName
          }
        });
      }}/>
    <Input
      size='md'
      placeholder='Last name'
      value={Person.name.lastName}/>
  </div>
);

const mapStateToProps = (
  state: Global.State,
  ownProps: NameInput.Props
): NameInput.Props => ({
  ...ownProps,
  Person: state.Person
});
const mapDispatchToProps = Action;
const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(NameInput);
