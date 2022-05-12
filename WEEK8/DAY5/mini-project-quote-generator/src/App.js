import './App.css';
import QuoteBox from './Components/QuoteBox';
import quotes from './quotes';
import React from 'react';
import randomColor from "randomcolor";

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      quote: '',
      author: '',
      color: '',
      quotesArray: [],
      lastUsed: 0
    }
  }
  getRandomInfo = () => {
      let newColor = randomColor();
      let randQuote = 
        Math.floor(Math.random() * quotes.length+1);
      
      if (this.state.quotesArray.length>=quotes.length) {
          alert('Reached maximum quotes!')
        } else {
          while (this.state.quotesArray.includes(randQuote)) {
            randQuote = Math.floor(Math.random() * quotes.length+1);
        }
      
      let currentQuote = quotes[randQuote];
      let newQuotesArr = this.state.quotesArray;
      newQuotesArr.push(randQuote);
        this.setState({
          color:newColor, 
          quote:currentQuote.quote,
          author:currentQuote.author,
          lastUsed:randQuote,
          quotesArray:newQuotesArr
        });
        } 
  }

  componentDidMount() {
    this.setState({quoteCounter:quotes.length});
    this.getRandomInfo();
  }

  render() {
    return (
      <div className="App">
        <header style={{backgroundColor:this.state.color}} className="App-header">
          <div style={{backgroundColor:'white'}}>
            <QuoteBox color={this.state.color} quote={this.state.quote} author={this.state.author}/>
            <button style={{backgroundColor:this.state.color,
              color:'white', fontWeight:900}}
              onClick={this.getRandomInfo}>New quote</button>
              <br/><br/>
          </div>
        </header>
      </div>
    );
  }
  
}

export default App;
