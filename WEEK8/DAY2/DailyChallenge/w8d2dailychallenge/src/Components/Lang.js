const Lang = (props) => {

    return (
        <>
            <div>{props.votes} {props.name} <button id={props.id} onClick={props.clickFunc}>Click Here</button></div>
        </>
    )

}

export default Lang;