import TransactionForm from './TransactionForm'
import {connect} from 'react-redux';
import {delete_trx,update_indx} from '../redux/actions'

const TransactionList = (props) => {
  return(
    <>
      <TransactionForm/>
      <h2>TransactionList</h2>
      <table style={{border:"1px solid #ccc"}}><tbody>
      {
        props.list.map((item,i)=>{
          return (
            <tr key={i}>
              <td style={{border:"1px solid #ccc",padding:'5px'}}>Account Number:</td>
              <td style={{border:"1px solid #ccc",padding:'5px'}}>{item.accountNumber}</td>
              <td style={{border:"1px solid #ccc",padding:'5px'}}>FSC:</td>
              <td style={{border:"1px solid #ccc",padding:'5px'}}>{item.FSC}</td>
              <td style={{border:"1px solid #ccc",padding:'5px'}}>Name:</td>
              <td style={{border:"1px solid #ccc",padding:'5px'}}>{item.name}</td>
              <td style={{border:"1px solid #ccc",padding:'5px'}}>Amount:</td>
              <td style={{border:"1px solid #ccc",padding:'5px'}}>{item.amount}</td>
              <td style={{border:"1px solid #ccc",padding:'5px'}}>
                <button onClick={ () => props.handleIndx(i) }>Edit</button>
              </td>
              <td style={{border:"1px solid #ccc",padding:'5px'}}>
                <button onClick={ () => props.handleDelete(i) }>Delete</button>
              </td>
            </tr>
          )
        })
      }
      </tbody></table>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    list:state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    handleDelete: (id) => dispatch(delete_trx(id)),
    handleIndx: (id) => dispatch(update_indx(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TransactionList)
