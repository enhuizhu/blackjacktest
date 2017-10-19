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

  it('sendoutCards should send out number of cards base on parameter', () => {
    const outCards = game.sendoutCards(2);

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

});