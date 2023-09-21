import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts);
    // const {userId,title,id} =posts;
    return (
        <div className="grid grid-cols-3 gap-6 m-20">
            {
                posts.map(post => <Post key={posts.id} post={post}></Post>)
            }
            {/* <h1>UserId:{userId}</h1>
            <p>{title}</p> */}
        </div>
    );
};

export default Posts;