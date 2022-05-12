const TodoList = (props) => {

    const hoverHandler = (e) => {
        e.target.classList.toggle('hover-strike-through');
    }

    return (
        <div className="listItem"
             id={props.id} 
             onClick={props.onClick} 
             onMouseEnter={hoverHandler} 
             onMouseLeave={hoverHandler}>
                 {props.dataObj.title}
        </div>
    )
}

export default TodoList;