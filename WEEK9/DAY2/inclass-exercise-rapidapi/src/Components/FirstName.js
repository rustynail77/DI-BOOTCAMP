const FirstName = (props) => {
    return (
        <>
            First name:<input type="text" name='fname' onChange={props.handleChange} />
        </>
    )
}

export default FirstName;