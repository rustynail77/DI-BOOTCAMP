import {connect} from 'react-redux';
import React from 'react';
import {insertItem, updateItem,updateIndex} from '../redux/actions';

const initState = {
    accountNumber: '',
    FSC: '',
    name: '',
    amount: ''
}

class TransactionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = initState;
    }

    handleInputChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    resetState = () => {
        this.setState({
            accountNumber:initState.accountNumber,
            FSC:initState.FSC,
            name: initState.name,
            amount:initState.amount});
    }

    handleSubmit = (e,index) => {
        e.preventDefault();
        if (index) {
            this.props.updateItem(this.state);
            this.resetState();
            this.props.updateIndex('');
        } else {     
            console.log('no index found. inserting', this.state);
            this.props.insertItem(this.state);
            this.resetState();
        }
        for (let i=0; i<4; i++) {
            document.getElementsByTagName('input')[i].value='';
        }
    }

    updateMyForm = () => {
        let obj = JSON.parse(localStorage.getItem('myObj'));
            for (let i=0; i<4; i++) {
                document.forms[0].elements[i].value = obj[document.forms[0].elements[i].name];
                this.setState({[document.forms[0].elements[i].name]:obj[document.forms[0].elements[i].name]});
            }
            localStorage.setItem('update','false');  
    }

    
    render() {
        if (this.props.currentIndex && localStorage.getItem('update')==='true') {
            this.updateMyForm();
        }
        return (
            <>
                <h2>Financial Transaction:</h2>    
                <form>
                    <input onChange={this.handleInputChange} type="text" name='accountNumber' placeholder="Account Number" />
                    <input onChange={this.handleInputChange} type="text" name='FSC' placeholder="FSC" />
                    <input onChange={this.handleInputChange} type="text" name='name' placeholder="Name of Account Holder" />
                    <input onChange={this.handleInputChange} type="text" name='amount' placeholder="Amount" />
                    <button onClick={(e)=>this.handleSubmit(e,this.props.currentIndex)} type="submit" name="submit-button">Submit</button>
                </form>
            </>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateItem: (obj) => {dispatch(updateItem(obj))},
        insertItem: (obj) => {dispatch(insertItem(obj))},
        updateIndex: (index) => {dispatch(updateIndex(index))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionForm);