import React from 'react';

import MotivationInput from 'Component/CV/Motivation';
import WorkExperienceTimeline from 'Component/CV/WorkEperienceTimeline';
import QualificationTimeline from 'Component/CV/QualificationTimeline';
import InterestsInput from 'Component/CV/Interests';
import Skills from 'Component/CV/Skills';
import PersonInput from 'Component/CV/Person';

class CV extends React.Component {
  static MotivationInput = MotivationInput;
  static WorkExperienceTimeline = WorkExperienceTimeline;
  static QualificationTimeline = QualificationTimeline;
  static InterestsInput = InterestsInput;
  static Skills = Skills;
  static PersonInput = PersonInput;

  render = () => (
    <div>
      {this.props.children}
    </div>
  )
}

export default CV;
