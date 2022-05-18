import {connect} from 'react-redux';
import TransactionForm from './TransactionForm';
import {delItem, updateIndex} from '../redux/actions';

const TransactionList = (props) => {
    return (
        <>
            <TransactionForm />
            <h2>Recorded Transactions:</h2>
            <div id="container">
                <table>
                    <tbody>
                    {props.list.map((item, i)=>{
                        return (
                            <tr key={i} id={i}>
                                <td>{item.accountNumber}</td>
                                <td>{item.FSC}</td>
                                <td>{item.name}</td>
                                <td>{item.amount}</td>
                                <td><button onClick={(e)=>props.updateItem(e,props.list[i])}>edit</button></td>
                                <td><button onClick={(e)=>props.deleteItem(e)}>delete</button></td>
                            </tr>
                        )                    
                    })
                    }   
                    </tbody>
                </table>  
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (e) => {
            let index = e.target.parentNode.parentNode.id;
            dispatch(delItem(index));
        },
        updateItem: (e,obj) => {
            let index = e.target.parentNode.parentNode.id;
            localStorage.setItem('myObj', JSON.stringify(obj));
            localStorage.setItem('update', 'true');
            dispatch(updateIndex(index));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionList);