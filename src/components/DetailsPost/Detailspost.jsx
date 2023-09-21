import { useNavigate, useLoaderData } from "react-router-dom";

const Detailspost = () => {
    const post = useLoaderData();
    
    console.log(post);
    const {id,body} = post;
    const navigate = useNavigate()
    const handleGoBack =() => {
        navigate(-1);
    }
    return (
        <div className="m-20 border-2 border-green-500 p-4 ">
            <h1>Id:{id}</h1>
            <p>{body}</p>
            <button className="border p-2 bg-black text-white rounded-md" onClick={handleGoBack}>Go Back</button>

        </div>
    );
};

export default Detailspost;