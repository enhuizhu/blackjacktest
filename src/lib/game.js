class Game {
  constructor() {
    this.prefix = ['diamond', 'spade', 'heart', 'club'];
    this.cards = this.getNewCardsSet();
  }

  generateFiftyTwoRandomNumbers() {
    let numbers = [];
    let randomNumbers = [];

    for(var i=0; i<52; i++) {
      numbers.push(i)
    };

    while(numbers.length) {
      var randomNumber = Math.round(Math.random() * (numbers.length - 1));
      randomNumbers.push(numbers[randomNumber]);
      numbers.splice(randomNumber,1);
    };

    return randomNumbers;
  }

  getNewCardsSet() {
    let newCards = [];
    let tempCards = [];

    const randomNumbers = this.generateFiftyTwoRandomNumbers();
    
    this.prefix.forEach((v) => {
      for(let i = 1; i <= 13; i++) {
        tempCards.push(`${v}_${i}`);
      }
    });

    randomNumbers.forEach((v) => {
      newCards.push(tempCards[v]);
    });

    return newCards;
  }

  sendOutCards(number) {
    let outCards = [];

    for (let i = 0; i < number; i++) {
      outCards.push(this.cards.pop());
    }

    return outCards;
  }

  getCardsTotalValue(cards) {
    let sum = 0;
    // when the value of 1, it also can be 10 use this one to save the extra value
    let extra = []; 
  
    cards.forEach((v) => {   
      try{
        var trueV = parseInt(v.split('_')[1]);
      }catch(e){
        console.info("value is",v);
      }

      if (trueV > 10) {
        trueV = 10;
      }

      if (trueV === 1) {
        extra.push(9);
      }

      sum += trueV;
    })

    if (sum < 21) {
      let extraSum = extra.reduce((memo, num) => {
        return memo + num; 
      }, 0)
      
      let totalSum = sum + extraSum;
      
      /**
      * should check if it's ace with another ten points
      **/
      if (totalSum === 20 && extra.length === 1 && cards.length === 2) {
        return 21;
      }

      if (totalSum <= 21) {
        return totalSum;
      }
    }

    return sum;
  }
  
  /**
  * true means hit, false means stick
  **/
  dealerHitOrStick(playerTotal, dealerTotal) {
    if (playerTotal > 21) {
      return false;
    }

    if (playerTotal === dealerTotal) {
      /**
      * should check the value of total, if total is less then 10, then dealer should ask for another card
      * if total is greater then 10, there is chance to lose then dealer should not ask for another card
      **/
      if (playerTotal <= 10) {
        return true;
      }

      return false;
    }

    if (dealerTotal < playerTotal) {
      return true;
    }

    return false;
  }

  getRestDealerCards(playerCards, dealerCards) {
    let playerTotal = this.getCardsTotalValue(playerCards);
    let dealerTotal = this.getCardsTotalValue(dealerCards);
    let resetCards = [];
    let bankerCardsCopy = [].concat(dealerCards);

    while(this.dealerHitOrStick(playerTotal, dealerTotal)) {
      let newCard = this.sendOutCards(1);
      resetCards = resetCards.concat(newCard);
      bankerCardsCopy = bankerCardsCopy.concat(newCard);
      dealerTotal = this.getCardsTotalValue(bankerCardsCopy);
    }

    return resetCards;
  }

  getPlayerFinalState(playerCards, dealerCards) {
    var playerTotal = this.getCardsTotalValue(playerCards),
    dealerTotal = this.getCardsTotalValue(dealerCards);

    if (playerTotal > 21) {
      return 0;
    }

    if (dealerTotal > 21) {
      return 2;
    }

    if (playerTotal > dealerTotal) {
      return 2;
    }

    if (playerTotal === dealerTotal) {
      return 1;
    }

    if (playerTotal < dealerTotal) {
      return 0;
    }
  }
}

export default Game;