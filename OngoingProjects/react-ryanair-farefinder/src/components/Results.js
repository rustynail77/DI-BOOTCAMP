const Results = (props) => {
    return(
        <>
            <h2>Search Results</h2>
            <div id="info">
                <div className="loading dontShow">
                    <img src='../data/waiting-icon-gif-1.jpg' alt="wait"/>
                    <p>Loading...</p>
                </div>
            </div>
        </>
    )
    
}

export default Results;