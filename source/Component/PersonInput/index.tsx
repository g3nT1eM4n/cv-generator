import React from 'react';
import NameInput from 'Component/PersonInput/NameInput';
import ContactInput from 'Component/PersonInput/ContactInput';

import { Input } from 'rsuite';

const PersonInput: React.FC = () => (
  <div>
    <NameInput/>
    <ContactInput>
      <Input size='md' placeholder='Reference'/>
    </ContactInput>
  </div>
);

export default PersonInput;
