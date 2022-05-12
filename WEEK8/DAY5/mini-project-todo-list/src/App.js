import React from 'react';
import './App.css';
import TodoList from './Components/TodoList';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      todoArray: []
    }
  }

submitHandler = (e) => {
  e.preventDefault();
  const newArr = [...this.state.todoArray];
  const value = document.getElementById('input').value;
  document.getElementById('input').value = '';
  newArr.push({'title':value});
  this.setState({todoArray:newArr});
}

clickHandler = (e) => {
  let newArr = [...this.state.todoArray];
  const value = e.target.id;
  newArr.splice(value,1);
  this.setState({todoArray:newArr});
}

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo's</h1>
          <div id="theList">
            {(this.state.todoArray.length===0)?(<div id="nothing">Nothing to do at the moment!</div>):(<></>)}
            {this.state.todoArray.map((item,i)=>{
                return (
                  <>
                    <TodoList key={i} id={i} onClick={this.clickHandler} dataObj={item}/>
                  </>
                )
            })
          }
          </div>
          <br />
          <form onSubmit={this.submitHandler}>
            Add new item: <input id="input" type="text" />
          </form>
        </header>
      </div>
    );

  }
  
}

export default App;
