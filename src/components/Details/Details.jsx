import { useLoaderData } from "react-router-dom";

const Details = () => {
    const user = useLoaderData();
   
    const {id,name,username,email} = user;
    return (
        <div className="text-center mt-8 border-2 border-purple-500 p-4 m-20">
            <h1>user details Id:{id}</h1>
            <h1>Name: {name}</h1>
            <p>UserName:{username}</p>
            <p>Email:{email}</p>
        </div>
    );
};

export default Details;