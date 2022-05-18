import React from 'react';
import User from './components/User';
import SearchBox from './components/SearchBox'
import './App.css';
import {connect} from 'react-redux';
import {getUsers} from './redux/actions';

import 'tachyons';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        users:[],
        searchTxt:''
    }
  }

  componentDidMount(){
    this.props.getUsers();
  }

  handleChange = (e) => {
    this.setState({searchTxt:e.target.value})
  }

  render() {
    
    const {users,searchTxt} = this.props;
    
    const filterUser = users.filter(item => {
      return item.name.toLowerCase().includes(searchTxt.toLowerCase());
    })
    return (
      <div>
        <h1>Users</h1>
        <SearchBox searchFunc={this.handleChange}/>
        {
          filterUser.map(item => {
            return (
              <User key={item.id} user={item} />
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users:state.users,
    searchTxt: state.searchTxt
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
