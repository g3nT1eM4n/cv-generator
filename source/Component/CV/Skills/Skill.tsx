import React from 'react';
import { Rate, Input } from 'rsuite';

const SkillInput: React.FC = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }}>
    <Input placeholder='Skill name'/>
    <Rate readOnly/>
  </div>
);

export default SkillInput;
