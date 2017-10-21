'use strict';
import React from 'react';
import App from '../app';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  it('getCardDom', () => {
    const wrapper = shallow(<App/>).instance();
    // const inst = wrapper.getInstance();

    // expect(true).toBe(true);
  });
});