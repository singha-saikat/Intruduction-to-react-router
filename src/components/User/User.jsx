import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const User = ({ user }) => {
    console.log(user);
    const {name,email,phone,id} = user;
    return (
        <div className='border-2 border-sky-500 rounded-md p-4'>
            <h2>Name:{name}</h2>
            <p>E-mail: {email}</p>
            <p>Phone:{phone}</p>
            <Link className='border p-1 ml-2 bg-slate-400'  to={`/user/${id}`}>Show Details</Link>
            <Link className='border p-1 ml-2 bg-slate-400'  to={`/post/${id}`}>Click for posts</Link>
        </div>
    );
};
User.propTypes = {
    user:PropTypes.object.isRequired
}

export default User;