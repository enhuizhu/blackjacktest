import React, { Component} from 'react';
import Button from '../button';
import Text from '../text';
import Game from '../../lib/game';
import CardDomHelper from './CardDomHelper';
import gameState from './gameState';
import message from './message';

import './app.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.game = null;
    this.initState();
  }

  initState() {
    this.state = {
      playerCards: [],
      dealerCards: [],
      playerTotal: 0,
      dealerTotal: 0,
      message: message.DEFAULT,
      gameState: gameState.NOT_START,
    }
  }

  newGame() {
    this.initState();
    this.game = new Game();
    
    this.setState({
      playerCards: this.game.sendOutCards(2),
      dealerCards: this.game.sendOutCards(2),
      gameState: gameState.STARTED,
    }, this.checkIfDealerShouldPlay.bind(this));
  }

  checkIfDealerShouldPlay() {
    const playerTotal = this.game.getCardsTotalValue( this.state.playerCards);
    
    if (playerTotal === 21) {
      this.stick();
    } else {
      this.checkGameOver();
      this.setTotal();
    }
  }

  setTotal() {
    const playerTotal = this.game.getCardsTotalValue(this.state.playerCards);
    
    const dealerTotal = this.game.getCardsTotalValue(
      this.state.gameState !== gameState.OVER ?
      this.state.dealerCards.slice(0, this.state.dealerCards.length - 1):
      this.state.dealerCards
    );

    this.setState({
      playerTotal,
      dealerTotal,
    });
  }

  checkGameOver(over = false) {
    const playerTotal = this.game.getCardsTotalValue(this.state.playerCards);

    if (playerTotal >= 21 || over) {
      this.state.gameState = gameState.OVER;
      
      const playerFinalState = this.game.getPlayerFinalState(this.state.playerCards, this.state.dealerCards);

      switch(playerFinalState) {
        case 0: // player lost
          this.setState({
            message: message.DEALER_WIN,
          });
          break;
        case 1: // draw
          this.setState({
            message: message.DRAW,
          })
          break;
        default: // player win
         this.setState({
           message: message.PLAYER_WIN,
         });
         break;
      }
    }
  }

  hit() {
    const newPlayerCards = this.state.playerCards.concat(this.game.sendOutCards(1));

    this.setState({
      playerCards: newPlayerCards,
    }, this.checkIfDealerShouldPlay.bind(this));
  }

  stick() {
    const resetDealerCards = this.game.getRestDealerCards(
      this.state.playerCards,
      this.state.dealerCards,
    );

    this.setState({
      dealerCards: this.state.dealerCards.concat(resetDealerCards),
    }, () => {
      this.checkGameOver(true);
      this.setTotal();
    });
  }

  render() {
    return (
      <div className="app">
        <div className="cards-container">
          {
            this.state.dealerCards.slice(0, this.state.dealerCards.length - 1).map((card, i) => {
              return CardDomHelper.getCardDom(card, i);
            })
          }

          {
            this.state.gameState === gameState.OVER ?
            CardDomHelper.getCardDom(this.state.dealerCards[this.state.dealerCards.length - 1]):
            (this.state.gameState === gameState.STARTED ? 
              <div className="card bg"></div>: null)
          }
          <div className="clear"></div>
        </div>

        <div className="total">
          <Text size="large">
            {this.state.dealerTotal}
          </Text>
        </div>

        <div className='content'>
          <Text size="large">{this.state.message}</Text>
        </div>
        
        <div className='total'>
          <Text size="large">
            {this.state.playerTotal}
          </Text>
        </div>
        
        <div className="cards-container">
          {
            this.state.playerCards.map((card, i) => {
              return CardDomHelper.getCardDom(card, i);
            })
          }
          <div className="clear"></div>
        </div>      

        <div className="buttons-container">
          <Button 
            onClick={this.newGame.bind(this)} 
            disabled={this.state.gameState === gameState.STARTED}>
            New Game
          </Button>
          <Button 
            onClick={this.hit.bind(this)}
            disabled={this.state.gameState !== gameState.STARTED}>
          Hit
          </Button>
          <Button 
          onClick={this.stick.bind(this)}
          disabled={this.state.gameState !== gameState.STARTED}>
            Stick
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
