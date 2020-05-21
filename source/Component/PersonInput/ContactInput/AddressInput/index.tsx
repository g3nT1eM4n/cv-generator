import React from 'react';
import { Input } from 'rsuite';

const AddressInput: React.FC = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  }}>
    <Input size='md' placeholder='Street name'/>
    <Input size='md' placeholder='House number'/>
    <Input size='md' placeholder='ZIP Code'/>
    <Input size='md' placeholder='City'/>
    <Input size='md' placeholder='Country'/>
  </div>
);

export default AddressInput;
