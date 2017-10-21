'use strict';

import Game from '../game';

describe('game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('generateFiftyTwoRandomNumber should return 52 random numbers', () => {
    let nu1 = [];

    for(let i = 0; i < 52; i++) {
      nu1.push(i);
    }

    let randomNumbers = game.generateFiftyTwoRandomNumbers();

    expect(randomNumbers.length).toBe(52);
    expect(randomNumbers).not.toEqual(nu1);
  });


  it('getNewCardsSet should return shifted cards set', () => {
    expect(game.cards.length).toBe(52);
    const prefix = ['diamond', 'spade', 'heart', 'club'];

    prefix.forEach((v) => {
      for(let i=1; i<=13; i++) {
        expect(`${v}_${i}`).not.toBe(-1);
      }
    });
  });

  it('sendOutCards should send out number of cards base on parameter', () => {
    const outCards = game.sendOutCards(2);

    expect(outCards.length).toBe(2);
    expect(game.cards.length).toBe(50);

    outCards.forEach((v) => {
      expect(game.cards.indexOf(v)).toBe(-1);
    });
  });

  it('getCardTotalValue, calculate the total value of cards set', () => {
    expect(game.getCardsTotalValue(["diamond_1","diamond_10"])).toBe(21);    
    expect(game.getCardsTotalValue(["diamond_2","diamond_10"])).toBe(12);    
    expect(game.getCardsTotalValue(["diamond_2","diamond_11"])).toBe(12);    
    expect(game.getCardsTotalValue(["diamond_2","diamond_12"])).toBe(12);    
    expect(game.getCardsTotalValue(["diamond_2","diamond_13"])).toBe(12);    
    expect(game.getCardsTotalValue(["diamond_10","diamond_13"])).toBe(20);   
    expect(game.getCardsTotalValue(["diamond_1","diamond_13"])).toBe(21);    
    expect(game.getCardsTotalValue(["diamond_1","diamond_13","diamond_13"])).toBe(21);   
    expect(game.getCardsTotalValue(["diamond_1","diamond_13","diamond_13","diamond_13"])).toBe(31);
    expect(game.getCardsTotalValue(["diamond_1","diamond_1"])).toBe(20);
  });

  it('dealerHitOrStick', () => {
    expect(game.dealerHitOrStick(11,20)).toBe(false);
    expect(game.dealerHitOrStick(11,11)).toBe(false);
    expect(game.dealerHitOrStick(15,10)).toBe(true);
    expect(game.dealerHitOrStick(10,10)).toBe(true);
    expect(game.dealerHitOrStick(9,9)).toBe(true);
    expect(game.dealerHitOrStick(19,17)).toBe(true);
    expect(game.dealerHitOrStick(24,17)).toBe(false);
    expect(game.dealerHitOrStick(26,17)).toBe(false);
  });

  it('getRestDealerCards, where player chose "stick", what the reset cards should dealer get', () => {
    game.cards = [""]
    expect(game.getRestDealerCards(["diamond_2","diamond_10"],["diamond_3","diamond_10"])).toEqual([]);
    
    game.cards = ["diamond_2","diamond_1","diamond_4"];
    expect(game.getRestDealerCards(["diamond_5","diamond_10"],["diamond_3","diamond_10"])).toEqual(["diamond_4"]);

    game.cards = ["diamond_4","diamond_1","diamond_2"];
    expect(game.getRestDealerCards(["diamond_5","diamond_10"],["diamond_3","diamond_10"])).toEqual(["diamond_2"]);

    game.cards = ["diamond_4","diamond_2","diamond_1"];
    expect(game.getRestDealerCards(["diamond_5","diamond_10"],["diamond_3","diamond_10"])).toEqual(["diamond_1","diamond_2"]);

    game.cards = ["diamond_4","diamond_2","diamond_10"];
    expect(game.getRestDealerCards(["diamond_5","diamond_10"],["diamond_3","diamond_10"])).toEqual(["diamond_10"]);

    game.cards = ["diamond_4","diamond_1","diamond_2","diamond_3","diamond_5"];
    expect(game.getRestDealerCards(["diamond_12","diamond_9"],["diamond_4","diamon_5"])).toEqual(["diamond_5","diamond_3","diamond_2"]);

    game.cards = ["diamond_4","diamond_6","diamond_1","diamond_3","diamond_5"];
    expect(game.getRestDealerCards(["diamond_12","diamond_9"],["diamond_4","diamon_5"])).toEqual(["diamond_5","diamond_3","diamond_1","diamond_6"]);    
  });
});