import './App.css';
import React from 'react';
import sup from './Superheroes.json';
import Card from './Components/Card';
import YouWon from './Components/YouWon';

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
      alert('Game over!');
      this.resetHandler();
    } else {
      tempCards[id].clicked = true;
      tempCards = tempCards.sort(() => Math.random() - 0.5);
      this.setState({cards:tempCards, myScore: this.state.myScore+1});
      if (this.state.myScore===11) {
        document.querySelector('#you-won').classList.remove('hide-me');
      }
    };
}
winHandler = () => {
  document.querySelector('#you-won').classList.add('hide-me');
  this.resetHandler();
}

  render () {
    return (
      <div className="App">
        <div className="myHeader">
          <h1>Memory Cards Game</h1>
          <h3>Try not to click more than once on the same card!</h3>
          <h2>Score: <b>{this.state.myScore}</b> |  Highscore: <b>{this.state.highScore}</b></h2>
        </div>
        <header className="App-header">
          <YouWon onClick={this.winHandler} className="you-won hide-me"/>
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
