import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      nuts: false,
      lactose: false,
      vegan: false
    }
  }
  handleChange = (e) => {
    const value = e.target.type==='checkbox' ? e.target.checked : e.target.value;
    this.setState({[e.target.name]: value});
  }

  render(){
    return (
    <div className="App">
      <header className="App-header">
      <>
        <form>
            <input placeholder="First name" type="text" name="firstName" onChange={this.handleChange} /><br/>
            <input placeholder="Last name" type="text" name="lastName" onChange={this.handleChange} /><br/>
            <input placeholder="Age" type="text" name="age" onChange={this.handleChange} /><br/>
            <div className="radio">
              <label><input name="gender" type="radio" value="Male" onChange={this.handleChange} />Male</label>
              <label><input name="gender" type="radio" value="Female" onChange={this.handleChange} />Female</label>
            </div>
            Destination:<select name="destination" value={this.state.value} onChange={this.handleChange}>
                <option value="Budapest">Budapest</option>
                <option value="San Francisco">San Francisco</option>
                <option value="Amsterdam">Amsterdam</option>
            </select>
            <br/>
            <input type="checkbox" name="nuts" onChange={this.handleChange} />Nuts free<br /> 
            <input type="checkbox" name="lactose" onChange={this.handleChange} />Lactose free<br /> 
            <input type="checkbox" name="vegan" onChange={this.handleChange} />Vegan<br /> 
            <br /> 
            <input type="submit" value='Submit' />
        </form>
        <FormComponent values={this.state} />
      </>
      </header>
    </div>
    );
}
}

const FormComponent = (props) => {
return (
  <div>
    <h2>Entered information:</h2>
    <div>Your name: {props.values.firstName} {props.values.lastName}</div>
    <div>Your age: {props.values.age}</div>
    <div>Your gender: {props.values.gender}</div>
    <div>Your destination: {props.values.destination}</div>
    <h4>Your dietary restrictions:</h4>
    <div>Nuts free: {(props.values.nuts) ? "Yes" : "No"}</div>
    <div>Lactose free: {(props.values.lactose) ? "Yes" : "No"}</div>
    <div>Vegan meal: {(props.values.vegan) ? "Yes" : "No"}</div>
  </div>
)
}

export default App;
