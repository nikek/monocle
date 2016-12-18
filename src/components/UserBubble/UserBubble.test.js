import React from 'react';
import {mount} from 'enzyme';
import {StateContainer} from 'cerebral/react'
import UserBubble from './index.js';

it('renders without crashing', () => {
  const state = {
    user: { name:'Sherlock' }
  }
  const wrapper = mount(
    <StateContainer state={state}>
      <UserBubble />
    </StateContainer>
  )

  expect(wrapper.find('.UserBubble-container').length).toBe(1);
  expect(wrapper.contains(<span className="UserBubble-name">Sherlock</span>))
    .toBe(true);
});
