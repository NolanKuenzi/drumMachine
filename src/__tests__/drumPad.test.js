import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { DrumPad } from '../drumPad.js';

describe('<DrumPad /> Component', () => {
  it('Renders a <div />', () => {
    const wrapper = shallow(<DrumPad />);
    expect(wrapper.exists()).toBe(true);
  });
});