import React from 'react';

class MyForm extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        username:'',
        password:'',
        textarea:'',
        select:'',
        value:'mango', //becomes the default value in the select field
        checkboxinput: false
    }
}
handleSubmit = (event) => {
console.log(this.state);
event.preventDefault();
}

handleChange = (event) => {
    const value = event.target.type==='checkbox' ? event.target.checked : event.target.value;
    this.setState({[event.target.name]:value}) //the [] destructs the variable so we get the name of the variable of "name" in the target (and not its value)
}

render() {
    return (
        <>
        <form onSubmit={this.handleSubmit}>
            Username: <input type="text" name="username" onChange={this.handleChange} /><br/>
            Password: <input type="text" name="password" onChange={this.handleChange}/><br/>
            Message: <textarea onChange={this.handleChange} name='textarea' />
            <select name="select" value={this.state.value} onChange={this.handleChange}>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            <br/>
            <input type="checkbox" name="checkboxinput" onChange={this.handleChange} />
            <br />
            <input type="submit" value='Submit' />
        </form>
        </>
    )
}
}
// dynamic object keys:
// let key = 'username';
// let obj = {
//     [key]: 'liron'
// }
//console.log(obj); // {username: 'liron'}

export default MyForm;