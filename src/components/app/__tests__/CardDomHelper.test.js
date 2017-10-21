'use strict';

import React from 'react';
import CardDomHelper from '../CardDomHelper';
import { shallow } from 'enzyme'

describe('CardDomHelper', () => {
  it('getCardObj', () => {
    expect(CardDomHelper.getCardObj('diamond_1')).toEqual({suit: 'diamond', value: 'ace'});
    expect(CardDomHelper.getCardObj('diamond_2')).toEqual({suit: 'diamond', value: '2'});
    expect(CardDomHelper.getCardObj('diamond_3')).toEqual({suit: 'diamond', value: '3'});
    expect(CardDomHelper.getCardObj('diamond_4')).toEqual({suit: 'diamond', value: '4'});
    expect(CardDomHelper.getCardObj('diamond_5')).toEqual({suit: 'diamond', value: '5'});
    expect(CardDomHelper.getCardObj('diamond_6')).toEqual({suit: 'diamond', value: '6'});
    expect(CardDomHelper.getCardObj('diamond_7')).toEqual({suit: 'diamond', value: '7'});
    expect(CardDomHelper.getCardObj('diamond_8')).toEqual({suit: 'diamond', value: '8'});
    expect(CardDomHelper.getCardObj('diamond_9')).toEqual({suit: 'diamond', value: '9'});
    expect(CardDomHelper.getCardObj('diamond_10')).toEqual({suit: 'diamond', value: '10'});
    expect(CardDomHelper.getCardObj('diamond_11')).toEqual({suit: 'diamond', value: 'jack'});
    expect(CardDomHelper.getCardObj('diamond_12')).toEqual({suit: 'diamond', value: 'queen'});
    expect(CardDomHelper.getCardObj('diamond_13')).toEqual({suit: 'diamond', value: 'king'});
  });

  it('getCardDom', () => {
    let wrapper = shallow(CardDomHelper.getCardDom('diamond_1'));
    expect(wrapper.unrendered.props.suit).toBe('diamond');
    expect(wrapper.unrendered.props.value).toBe('ace');

    wrapper = shallow(CardDomHelper.getCardDom('diamond_2'));
    expect(wrapper.unrendered.props.suit).toBe('diamond');
    expect(wrapper.unrendered.props.value).toBe('2');

    wrapper = shallow(CardDomHelper.getCardDom('diamond_3'));
    expect(wrapper.unrendered.props.suit).toBe('diamond');
    expect(wrapper.unrendered.props.value).toBe('3');

    wrapper = shallow(CardDomHelper.getCardDom('diamond_4'));
    expect(wrapper.unrendered.props.suit).toBe('diamond');
    expect(wrapper.unrendered.props.value).toBe('4');

    wrapper = shallow(CardDomHelper.getCardDom('diamond_5'));
    expect(wrapper.unrendered.props.suit).toBe('diamond');
    expect(wrapper.unrendered.props.value).toBe('5');

    wrapper = shallow(CardDomHelper.getCardDom('diamond_6'));
    expect(wrapper.unrendered.props.suit).toBe('diamond');
    expect(wrapper.unrendered.props.value).toBe('6');

    wrapper = shallow(CardDomHelper.getCardDom('diamond_7'));
    expect(wrapper.unrendered.props.suit).toBe('diamond');
    expect(wrapper.unrendered.props.value).toBe('7');

    wrapper = shallow(CardDomHelper.getCardDom('diamond_8'));
    expect(wrapper.unrendered.props.suit).toBe('diamond');
    expect(wrapper.unrendered.props.value).toBe('8');

    wrapper = shallow(CardDomHelper.getCardDom('diamond_9'));
    expect(wrapper.unrendered.props.suit).toBe('diamond');
    expect(wrapper.unrendered.props.value).toBe('9');

    wrapper = shallow(CardDomHelper.getCardDom('diamond_10'));
    expect(wrapper.unrendered.props.suit).toBe('diamond');
    expect(wrapper.unrendered.props.value).toBe('10');

    wrapper = shallow(CardDomHelper.getCardDom('diamond_11'));
    expect(wrapper.unrendered.props.suit).toBe('diamond');
    expect(wrapper.unrendered.props.value).toBe('jack');

    wrapper = shallow(CardDomHelper.getCardDom('diamond_12'));
    expect(wrapper.unrendered.props.suit).toBe('diamond');
    expect(wrapper.unrendered.props.value).toBe('queen');

    wrapper = shallow(CardDomHelper.getCardDom('diamond_13'));
    expect(wrapper.unrendered.props.suit).toBe('diamond');
    expect(wrapper.unrendered.props.value).toBe('king');

    wrapper = shallow(CardDomHelper.getCardDom('spade_1'));
    expect(wrapper.unrendered.props.suit).toBe('spade');
    expect(wrapper.unrendered.props.value).toBe('ace');

    wrapper = shallow(CardDomHelper.getCardDom('spade_2'));
    expect(wrapper.unrendered.props.suit).toBe('spade');
    expect(wrapper.unrendered.props.value).toBe('2');

    wrapper = shallow(CardDomHelper.getCardDom('spade_3'));
    expect(wrapper.unrendered.props.suit).toBe('spade');
    expect(wrapper.unrendered.props.value).toBe('3');

    wrapper = shallow(CardDomHelper.getCardDom('spade_4'));
    expect(wrapper.unrendered.props.suit).toBe('spade');
    expect(wrapper.unrendered.props.value).toBe('4');

    wrapper = shallow(CardDomHelper.getCardDom('spade_5'));
    expect(wrapper.unrendered.props.suit).toBe('spade');
    expect(wrapper.unrendered.props.value).toBe('5');

    wrapper = shallow(CardDomHelper.getCardDom('spade_6'));
    expect(wrapper.unrendered.props.suit).toBe('spade');
    expect(wrapper.unrendered.props.value).toBe('6');

    wrapper = shallow(CardDomHelper.getCardDom('spade_7'));
    expect(wrapper.unrendered.props.suit).toBe('spade');
    expect(wrapper.unrendered.props.value).toBe('7');

    wrapper = shallow(CardDomHelper.getCardDom('spade_8'));
    expect(wrapper.unrendered.props.suit).toBe('spade');
    expect(wrapper.unrendered.props.value).toBe('8');

    wrapper = shallow(CardDomHelper.getCardDom('spade_9'));
    expect(wrapper.unrendered.props.suit).toBe('spade');
    expect(wrapper.unrendered.props.value).toBe('9');

    wrapper = shallow(CardDomHelper.getCardDom('spade_10'));
    expect(wrapper.unrendered.props.suit).toBe('spade');
    expect(wrapper.unrendered.props.value).toBe('10');

    wrapper = shallow(CardDomHelper.getCardDom('spade_11'));
    expect(wrapper.unrendered.props.suit).toBe('spade');
    expect(wrapper.unrendered.props.value).toBe('jack');

    wrapper = shallow(CardDomHelper.getCardDom('spade_12'));
    expect(wrapper.unrendered.props.suit).toBe('spade');
    expect(wrapper.unrendered.props.value).toBe('queen');

    wrapper = shallow(CardDomHelper.getCardDom('spade_13'));
    expect(wrapper.unrendered.props.suit).toBe('spade');
    expect(wrapper.unrendered.props.value).toBe('king');

    wrapper = shallow(CardDomHelper.getCardDom('heart_1'));
    expect(wrapper.unrendered.props.suit).toBe('heart');
    expect(wrapper.unrendered.props.value).toBe('ace');

    wrapper = shallow(CardDomHelper.getCardDom('heart_2'));
    expect(wrapper.unrendered.props.suit).toBe('heart');
    expect(wrapper.unrendered.props.value).toBe('2');

    wrapper = shallow(CardDomHelper.getCardDom('heart_3'));
    expect(wrapper.unrendered.props.suit).toBe('heart');
    expect(wrapper.unrendered.props.value).toBe('3');

    wrapper = shallow(CardDomHelper.getCardDom('heart_4'));
    expect(wrapper.unrendered.props.suit).toBe('heart');
    expect(wrapper.unrendered.props.value).toBe('4');

    wrapper = shallow(CardDomHelper.getCardDom('heart_5'));
    expect(wrapper.unrendered.props.suit).toBe('heart');
    expect(wrapper.unrendered.props.value).toBe('5');

    wrapper = shallow(CardDomHelper.getCardDom('heart_6'));
    expect(wrapper.unrendered.props.suit).toBe('heart');
    expect(wrapper.unrendered.props.value).toBe('6');

    wrapper = shallow(CardDomHelper.getCardDom('heart_7'));
    expect(wrapper.unrendered.props.suit).toBe('heart');
    expect(wrapper.unrendered.props.value).toBe('7');

    wrapper = shallow(CardDomHelper.getCardDom('heart_8'));
    expect(wrapper.unrendered.props.suit).toBe('heart');
    expect(wrapper.unrendered.props.value).toBe('8');

    wrapper = shallow(CardDomHelper.getCardDom('heart_9'));
    expect(wrapper.unrendered.props.suit).toBe('heart');
    expect(wrapper.unrendered.props.value).toBe('9');

    wrapper = shallow(CardDomHelper.getCardDom('heart_10'));
    expect(wrapper.unrendered.props.suit).toBe('heart');
    expect(wrapper.unrendered.props.value).toBe('10');

    wrapper = shallow(CardDomHelper.getCardDom('heart_11'));
    expect(wrapper.unrendered.props.suit).toBe('heart');
    expect(wrapper.unrendered.props.value).toBe('jack');

    wrapper = shallow(CardDomHelper.getCardDom('heart_12'));
    expect(wrapper.unrendered.props.suit).toBe('heart');
    expect(wrapper.unrendered.props.value).toBe('queen');

    wrapper = shallow(CardDomHelper.getCardDom('heart_13'));
    expect(wrapper.unrendered.props.suit).toBe('heart');
    expect(wrapper.unrendered.props.value).toBe('king');

    wrapper = shallow(CardDomHelper.getCardDom('club_1'));
    expect(wrapper.unrendered.props.suit).toBe('club');
    expect(wrapper.unrendered.props.value).toBe('ace');

    wrapper = shallow(CardDomHelper.getCardDom('club_2'));
    expect(wrapper.unrendered.props.suit).toBe('club');
    expect(wrapper.unrendered.props.value).toBe('2');

    wrapper = shallow(CardDomHelper.getCardDom('club_3'));
    expect(wrapper.unrendered.props.suit).toBe('club');
    expect(wrapper.unrendered.props.value).toBe('3');

    wrapper = shallow(CardDomHelper.getCardDom('club_4'));
    expect(wrapper.unrendered.props.suit).toBe('club');
    expect(wrapper.unrendered.props.value).toBe('4');

    wrapper = shallow(CardDomHelper.getCardDom('club_5'));
    expect(wrapper.unrendered.props.suit).toBe('club');
    expect(wrapper.unrendered.props.value).toBe('5');

    wrapper = shallow(CardDomHelper.getCardDom('club_6'));
    expect(wrapper.unrendered.props.suit).toBe('club');
    expect(wrapper.unrendered.props.value).toBe('6');

    wrapper = shallow(CardDomHelper.getCardDom('club_7'));
    expect(wrapper.unrendered.props.suit).toBe('club');
    expect(wrapper.unrendered.props.value).toBe('7');

    wrapper = shallow(CardDomHelper.getCardDom('club_8'));
    expect(wrapper.unrendered.props.suit).toBe('club');
    expect(wrapper.unrendered.props.value).toBe('8');

    wrapper = shallow(CardDomHelper.getCardDom('club_9'));
    expect(wrapper.unrendered.props.suit).toBe('club');
    expect(wrapper.unrendered.props.value).toBe('9');

    wrapper = shallow(CardDomHelper.getCardDom('club_10'));
    expect(wrapper.unrendered.props.suit).toBe('club');
    expect(wrapper.unrendered.props.value).toBe('10');

    wrapper = shallow(CardDomHelper.getCardDom('club_11'));
    expect(wrapper.unrendered.props.suit).toBe('club');
    expect(wrapper.unrendered.props.value).toBe('jack');

    wrapper = shallow(CardDomHelper.getCardDom('club_12'));
    expect(wrapper.unrendered.props.suit).toBe('club');
    expect(wrapper.unrendered.props.value).toBe('queen');

    wrapper = shallow(CardDomHelper.getCardDom('club_13'));
    expect(wrapper.unrendered.props.suit).toBe('club');
    expect(wrapper.unrendered.props.value).toBe('king');
  });

});