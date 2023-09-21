import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Fotter from "../Footer/Fotter";

const Home = () => {
    return (
        <div>
            <h2 className="flex justify-center mt-20 text-3xl">This is Home components</h2>
            <Header></Header>
            <Outlet></Outlet> {/* Here outlet holds all things without header and footer */}
            <Fotter></Fotter>
        </div>
    );
};

export default Home;