const Card = (props) => {
    // console.log(props.cardData);
    return (
        <div id={props.cardData.id} onClick={props.onClick} className="card">
            <img src={props.cardData.image} alt=""/>
            <div><b>Name: </b>{props.cardData.name}</div>
            <div><b>Occupation: </b>{props.cardData.occupation}</div>
        </div>
    )
}

export default Card;