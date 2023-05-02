import { v4 as uuid } from "uuid";

const Users = ({ users, onDelete }) => {
    return (
        <div className="grid">
            {users.map((user) => {
                const { name, email, gen } = user;
                return (
                    <div className="card" key={uuid()}>
                        <p>{name}</p>
                        <p>{email}</p>
                        <p>{gen}</p>
                        <div className="editDelete">
                            <button>Edit</button>
                            <button onClick={() => onDelete(user.id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Users