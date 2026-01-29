import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

const ListApp = () => {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState("table");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="buttons">
        <button onClick={() => setView("table")}>Table View</button>
        <button onClick={() => setView("card")}>Card View</button>
      </div>

      {view === "table" ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="card-container">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListApp;
