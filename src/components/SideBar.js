import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="bg-slate-300 h-full w-52 py-36 items-center flex flex-col">

            <div className="p-2">
                <Link to="/">
                    <span className="bg-green-300 w-20 h-10 rounded-lg shadow-lg p-1">Home</span>
                </Link>
            </div>

            <div className="p-2">
                <Link to="/chatbox">
                    <span className="bg-green-300 w-20 h-10 rounded-lg shadow-lg p-1">Chat-box</span>
                </Link>
            </div>

            <div className="p-2">
                <Link to="/cart">
                    <span className="bg-green-300 w-20 h-10 rounded-lg shadow-lg p-1">Cart</span>
                </Link>
            </div>

            <div className="p-2">
                <Link to="/profile">
                    <span className="bg-green-300 w-20 h-10 rounded-lg shadow-lg p-1">Profile</span>
                </Link>
            </div>
        </div>
    )
};

export default SideBar;