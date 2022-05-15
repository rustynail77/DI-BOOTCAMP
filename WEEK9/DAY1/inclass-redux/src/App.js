import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import Hello from './components/Hello';
import {handleChangeFromRedux} from './redux/actions';
import {handleChangeTwo} from './redux/actions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property_one:'Prop 1',
      property_two:'Prop 2'
    }
  }
  handleChangeAppState = (e) => {
    this.setState({property_one:e.target.value})
  }
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h2>Simple Redux Example</h2> 
        <p>Property_one: {this.state.property_one}</p>      
        <p>Property_two: {this.state.property_two}</p>
        <p><input type="text" onChange={this.handleChangeAppState} /></p>
        <p>property_one from store: {this.props.prop_one}</p>
        <p><input type="text" onChange={this.props.myHandleChange} /></p>
        <h2>Hello Component</h2>
        <Hello text_from_app={this.state.property_one}/>
        <h2>Property two from redux: {this.props.prop_two}</h2> {/*taking prop_two which is being imported by the function mapStateToProps below*/}
        <p><input type="text" onChange={this.props.myHandleChangeTwo} /></p>

      </header>
    </div>
  );
}
}
const mapStateToProps = (state)=>{
  return {
    prop_one: state.property_one, //state.property_one from 'reducers.js', which is 
                                 //what I want to use above in App
    prop_two: state.property_two
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    myHandleChange: (e) => dispatch(handleChangeFromRedux(e.target.value)),
    myHandleChangeTwo: (e) => dispatch(handleChangeTwo(e.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
