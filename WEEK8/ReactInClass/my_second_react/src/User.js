const User = (props) => {
    return (
        <div>
            <h2>User info:</h2>
            <h4>Name: {props.name}</h4>
            <p>Username: {props.username}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}
export default User;