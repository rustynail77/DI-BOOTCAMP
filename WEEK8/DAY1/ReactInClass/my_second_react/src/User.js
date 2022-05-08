const User = (props) => {
    return (
        <> {/* This is how you comment */}
            <h3>User info:</h3>
            <div>Name: {props.name}</div>
            <div>Username: {props.username}</div>
            <div>Email: {props.email}</div>
        </>
    )
}
export default User;