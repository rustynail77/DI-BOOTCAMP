import React from 'react';
import {connect} from 'react-redux';
import {insert_trx,update_trx} from '../redux/actions';

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountNumber:'',
      FSC:'',
      name:'',
      amount:''
    }
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.props.currentIndex===-1){
      this.props.handleInsert(this.state);
    }
    else {
      this.props.handleUpdate(this.state);
    }
    this.setState({
      accountNumber:'',
      FSC:'',
      name:'',
      amount:''
    })
  }

  componentDidUpdate = (prevProps) => {
    if(prevProps.currentIndex!= this.props.currentIndex
        && this.props.currentIndex!=-1)
    {
      const trx = this.props.list[this.props.currentIndex];
      this.setState({
        accountNumber: trx.accountNumber || '',
        FSC: trx.FSC || '',
        name: trx.name || '',
        amount: trx.amount||''
      })
    }
  }

  render(){
    return (
      <>
        <h2>Transaction Form:</h2>
        <form onSubmit={this.handleSubmit }>
          <input type='text'
                 name='accountNumber'
                 onChange={this.handleInputChange}
                 value={this.state.accountNumber}
                 placeholder="Account Number"
                 /><br/>
           <input type='text'
                  name='FSC'
                  onChange={this.handleInputChange}
                  value={this.state.FSC}
                  placeholder="FSC"
                  /><br/>
          <input type='text'
                 name='name'
                 onChange={this.handleInputChange}
                 value={this.state.name}
                 placeholder="Name"
                 /><br/>
           <input type='text'
                  name='amount'
                  onChange={this.handleInputChange}
                  value={this.state.amount}
                  placeholder="Amount"
                  /><br/>
            <input type='submit'
            value={this.props.currentIndex===-1?'Submit':'Update'}
            />
        </form>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    currentIndex:state.currentIndex,
    list:state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInsert: (trx) => dispatch(insert_trx(trx)),
    handleUpdate: (trx) => dispatch(update_trx(trx))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
