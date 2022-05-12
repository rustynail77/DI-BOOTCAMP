const QuoteBox = (props) => {
    return (
    <>
        <h1 style={{color:props.color, fontStyle:'italic'}}>"{props.quote}"</h1>
        <h3 style={{color:props.color}}>-{props.author}-</h3>
    </>
    )
}

export default QuoteBox;