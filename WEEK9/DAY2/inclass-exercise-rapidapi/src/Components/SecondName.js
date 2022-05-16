const SecondName = (props) => {
    return (
        <>
            Second name:<input type="text" name='sname' onChange={props.handleChange} />
        </>
    )
}

export default SecondName;