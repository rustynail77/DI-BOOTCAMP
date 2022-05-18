const User = (props) => {
  const {user} = props;
  console.log(user);
  const {name, username, email, id} = user;
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img src={`https://robohash.org/${id}`} />
      <h5 style={{color:'red',textAlign:'center'}}>{name}</h5>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  )
}
export default User;
