import React from 'react';
import Card from '../card';

class CardDomHelper {
  static getCardObj(card) {
    let specialCardsMap = {
      '1': 'ace',
      '11': 'jack',
      '12': 'queen',
      '13' : 'king',
    };

    let keys = Object.keys(specialCardsMap);

    let cardObj = card.split('_').reduce((obj, current) => {
      let key;
      
      if (isNaN(current)) {
        key = 'suit'
      } else {
        key = 'value';
      }

      obj[key] = current;

      return obj;
    }, {});

    /**
    * find special card should update the value
    **/
    if (keys.indexOf(cardObj.value) !== -1) {
      cardObj.value = specialCardsMap[cardObj.value];
    }

    return cardObj;
  }

  static getCardDom(card, key) {
    const cardObj = this.getCardObj(card);
    return (<Card suit={cardObj.suit} value={cardObj.value} key={key}/>);
  }
}

export default CardDomHelper;