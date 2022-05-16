import './App.css';
import React from 'react';
import FirstName from './Components/FirstName';
import SecondName from './Components/SecondName';
import ResultsButton from './Components/ResultsButton';
import Results from './Components/Results';
const API = 'https://rapidapi.com/ajith/api/love-calculator/';


class App extends React.Component {
  constructor (props) {
    super();
    this.state = {
      fname: '',
      sname: '',
      results: {}
    }
  }

  handleClick = () => {
    const {fname,sname} = this.state;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
        'X-RapidAPI-Key': '5fd1e84e06msh760c3090ac7ede1p101d27jsn5a896dd60ea9'
      }
    };
    
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.setState({results:response})
      })
      .catch(err => console.error(err));
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <FirstName handleChange={this.handleChange}/>
          <SecondName handleChange={this.handleChange}/>
          <ResultsButton handleClick={this.handleClick}/>
          <Results results={this.state.results}/>
        </header>
      </div>
    );
  }
 
}

export default App;
