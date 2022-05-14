const Announcement = (props) => {
    return (
        <div id={props.id} className={props.className}>
            <h3>{props.h3}</h3>
            <h1>{props.h1}</h1>
            <button 
                onClick={props.onClick}
                className={props.buttonClass}>
                    Ok
                    </button>
        </div>
    )
}

export default Announcement;