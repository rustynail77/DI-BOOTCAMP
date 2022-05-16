const Results = (props) => {
    return (
        <>
            <h2>Results:</h2>
            <p>{props.results.fname} & {props.results.sname}</p>
            <p>percentage: {props.results.percentage}</p>
            <p>result {props.results.result}</p>
        </>
    )
}

export default Results;