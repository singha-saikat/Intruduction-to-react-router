import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    // console.log(users);
    
    
    return (
        <div className="text-center mt-4">
            <h1>Users: {users.length}</h1>
            
            <div className="grid grid-cols-3 gap-6 mt-8 m-4">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
            
        </div>
    );
};

export default Users;