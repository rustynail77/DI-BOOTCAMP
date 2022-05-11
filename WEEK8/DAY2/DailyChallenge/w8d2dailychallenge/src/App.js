import './App.css';
import React from 'react';
// import Lang from './Components/Lang';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      languages : [
          {name: "Php", votes: 0},
          {name: "Python", votes: 0},
          {name: "JavaSript", votes: 0},
          {name: "Java", votes: 0}
      ]
    }
    // this.langArr = this.state.languages;

  }
  // clickaroo = (e) => {
  //   let num = e.target.id;
  //   this.langArr[num].votes += 1;
  //   this.setState({languages:this.langArr});
  // }
  // The way taught in class:
  handleAdd = (param) => {
    let arr = [...this.state.languages];
    arr[param].votes++;
    this.setState({languages: arr});
    // this.setState({languages:[...this.state.languages]}); //using the array by reference and not by value is better
    // but it could be done this way as well: {languages:this.state.languages}


  }
  render() {
    return (
      <div className="App">
        {/* {
          this.langArr.map((lang, i) => {
            return (
            <Lang key={i} id={i} name={lang.name} votes={lang.votes} clickFunc={this.clickaroo} />
            )
          })
        }         */}
        {/* the way taught in class: */}
        <div>
          {
            this.state.languages.map((item,i)=> {
              return(
                <div key={i}>
                  {item.name} - {item.votes} 
                  <button onClick={()=>this.handleAdd(i)}>Add</button>
                </div>
              )
            })

          }
        </div>
        
  
      </div>
    );
  }
  }
  

export default App;
