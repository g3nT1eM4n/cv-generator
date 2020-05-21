import React from 'react';
import AddressInput from 'Component/PersonInput/ContactInput/AddressInput';
import PhoneNumberInput from 'Component/PersonInput/ContactInput/PhoneNumberInput';
import MailAddressInput from 'Component/PersonInput/ContactInput/MailAddressInput';

const ContactInput: React.FC = ({
  children
}) => (
  <div>
    <AddressInput/>
    <PhoneNumberInput/>
    <MailAddressInput/>
    {children}
  </div>
);

export default ContactInput;
