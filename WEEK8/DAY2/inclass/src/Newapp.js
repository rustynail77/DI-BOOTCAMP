import User from './components/User';
import './App.css';
// import users from './users.json';
import 'tachyons';
import React from 'react'; //needed for the class App
import SearchBox from './components/searchBox';

class Newapp extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            txt: '',
            searchTxt: ''

        }
    }
    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=> {
            this.setState({users:data})        
        })
    }
    
    // handleUsers = () => {
        // fetch('http://jsonplaceholder.typicode.com/users')
        // .then(res => res.json())
        // .then(data=> {
        //     this.setState({users:data})        
        // })
    // }
handleChange = (e) => {
    console.log(e.target.value);
    this.setState({txt:e.target.value})
}
handleClick = () => {
    this.setState({searchTxt:this.state.txt})
}

    render(){
        const {users, searchTxt} = this.state;
        const filterUser = users.filter(item => {
            return item.name.toLowerCase().includes(searchTxt.toLowerCase());
        })
        return (
            <div>
                <h1>Users</h1>
                <SearchBox searchFunc={this.handleChange} clickFunc={this.handleClick}/>
                {
                filterUser.map(item => {
                    return (
                    <User key={item.id} user={item}  />
                    )
                })
                }
                {/* <button onClick={this.handleUsers}>Get users</button> */}
            </div>
        )
    }
}

export default Newapp;