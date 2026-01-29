const UserCard = ({ user }) => {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>City:</b> {user.address.city}</p>
    </div>
  );
};

export default UserCard;
