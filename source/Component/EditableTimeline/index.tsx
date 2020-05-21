import React from 'react';
import { Timeline, DatePicker, Input } from 'rsuite';

const EditableTimeline: React.FC = () => (
  <div>
    <Timeline>
      <Timeline.Item>16:27:41 Your order starts processing</Timeline.Item>
      <Timeline.Item>16:27:41 Your order starts processing</Timeline.Item>
      <Timeline.Item>16:27:41 Your order starts processing</Timeline.Item>
      <Timeline.Item>16:27:41 Your order starts processing</Timeline.Item>
      <Timeline.Item>16:27:41 Your order starts processing</Timeline.Item>
    </Timeline>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <DatePicker format="YYYY-MM"/>
      <Input placeholder='Description'/>
    </div>
  </div>
);

export default EditableTimeline;
