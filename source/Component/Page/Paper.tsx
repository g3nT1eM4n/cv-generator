import React from 'react';
import { Panel } from 'rsuite';
const Paper: React.FC = ({ children }) => (
  <Panel shaded style={{
    position: 'absolute',
    top: 100,
    left: 'calc(50% - 10.5cm)',
    width: '21cm',
    height: '29.7cm',
    background: 'white'
  }}>
    {children}
  </Panel>
);

export default Paper;
