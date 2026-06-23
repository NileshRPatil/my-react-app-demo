import { Link } from "react-router-dom";

function UserCard({ user, deleteHandler }) {
  return (
    <>
      <div className="card" id={user.id}>
        <p className="card-title">
          {user.firstName} {user.lastName}
        </p>
        <p className="card-text">{user.email}</p>
        <p className="card-text">{user.phone}</p>
        <button
          className="card-button card-button-danger"
          onClick={() => deleteHandler(user.id)}
        >
          Delete
        </button>
        <Link
          to={`/admin/users/${user.id}`}
          className="card-button card-button-info"
        >
          Show
        </Link>
      </div>
    </>
  );
}

export default UserCard;
