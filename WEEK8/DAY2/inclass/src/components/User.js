const User = (props) => {
const {user} = props;
const {id, name, username, email, address} = user;


    return (
        <div className="tc grow bg-light-yellow br3 pa3 ma2 dib bw2 shadow-5"> {/* using tachyons */}
            <img src={`https://robohash.org/${id}?size=150x150`}></img>
            <h3>User info:</h3>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Address (city): {address.city}</div>
        </div>
    )
}
export default User;