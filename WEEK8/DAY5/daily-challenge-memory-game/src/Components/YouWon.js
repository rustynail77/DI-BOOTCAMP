const YouWon = (props) => {
    return (
        <div id="you-won" className="you-won hide-me">
            <h1>You Won!</h1>
            <button 
                onClick={props.onClick}
                className="win-button">
                    Ok
                    </button>
        </div>
    )
}

export default YouWon;