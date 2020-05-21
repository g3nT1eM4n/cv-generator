import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'Style';
import Page from 'Component/Page';
import CV from 'Component/CV';
import Store from 'Store';

document.getElementsByTagName('body')[0].style.background = 'rgba(235, 235, 235)';

const {
  PersonInput,
  MotivationInput,
  WorkExperienceTimeline,
  QualificationTimeline,
  InterestsInput,
  Skills
} = CV;

render(
  <div className="app">
    <Provider store={Store}>
    <Page.Paper>
      <Page.Title/>
      <CV>
        <PersonInput/>
        <MotivationInput/>
        <WorkExperienceTimeline/>
        <QualificationTimeline/>
        <InterestsInput/>
        <Skills.Set>
          <Skills.Type>
            <Skills.Skill/>
          </Skills.Type>
        </Skills.Set>
      </CV>
    </Page.Paper>
    </Provider>
  </div>,
  document.getElementById('root')
);
