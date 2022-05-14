import './App.css';
import React from 'react';
import sup from './Superheroes.json';
import Card from './Components/Card';
import Announcement from './Components/Announcement';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      highScore: 0,
      myScore: 0
    }
  }
  componentDidMount() {
    this.resetHandler();
  }

  resetHandler = () => {
    let newHS = (this.state.myScore > this.state.highScore) ?
      this.state.myScore : this.state.highScore;
    let theCards = [...sup.superheroes];
    theCards.map(card =>card.clicked=false);
    theCards = theCards.sort(() => Math.random() - 0.5);
    this.setState({cards:theCards, myScore:0, highScore:newHS});
  }

  clickHandler = (e) => {
    let itemId = (e.target.classList==='card') ? e.target.id: e.target.parentNode.id;
    let tempCards = [...this.state.cards];
    let id = tempCards.findIndex(item=>item.id===Number(itemId));
    if (tempCards[id].clicked===true) {
      document.querySelector('#game-over').classList.remove('hide-me');
      document.querySelector('#black-screen').classList.remove('hide-me');
      this.resetHandler();
    } else {
      tempCards[id].clicked = true;
      tempCards = tempCards.sort(() => Math.random() - 0.5);
      this.setState({cards:tempCards, myScore: this.state.myScore+1});
      if (this.state.myScore===11) {
        document.querySelector('#black-screen').classList.remove('hide-me');
        document.querySelector('#you-won').classList.remove('hide-me');
      }
    };
}
winHandler = (winID) => {
  document.querySelector(winID).classList.add('hide-me');
  document.querySelector('#black-screen').classList.add('hide-me');
  this.resetHandler();
}

  render () {
    return (
      <div className="App">
        <div className="myHeader">
          <h1>Memory Cards Game</h1>
          <h3>Try not to click more than once on the same card!</h3>
          <h2>Score: <b>{this.state.myScore}</b> | Highscore: <b>{this.state.highScore}</b></h2>
        </div>
        <header className="App-header">
          <div id="black-screen" className="black-screen hide-me">
            <Announcement 
              onClick={()=>this.winHandler('#you-won')} 
              className="announcement you-won hide-me"
              h1="You Won!"
              buttonClass="win-button"
              id="you-won" />
            <Announcement 
              onClick={()=>this.winHandler('#game-over')} 
              className="announcement game-over hide-me"
              h3="You pressed this card already!"
              h1="Game Over"
              buttonClass="go-button"
              id="game-over" />
          </div>

          {this.state.cards.map(card =>{
            return (
              <Card key={card.id} onClick={this.clickHandler} cardData={card}/>
            )
          })}
        </header>
      </div>
    );
  }
  
}

export default App;
