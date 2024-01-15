import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { switchOffMenu, switchOnMenu, toggleMenu } from "../utils/Slices/MenuSlice";
const Header = () => {
    const dispatch = useDispatch();

    return (
        <div className="p-3 w-full min-h-28 max-h-full bg-slate-200 top-0 fixed">
            
            <div className="flex justify-center">
                <div className="p-2">
                    <Link to="/">
                        <button onClick={() => dispatch(switchOnMenu())} className="p-1 w-24 h-6 bg-green-300 rounded-lg shadow-lg">Home</button>
                    </Link>
                </div>
                
                <div className="p-2">
                    <Link to="/chatbox">
                        <button onClick={() => dispatch(switchOffMenu())} className="p-1 w-24 h-6 bg-green-300 rounded-lg shadow-lg">Chat Box</button>
                    </Link>
                </div>

                <div className="p-2">
                    <Link to="/cart">
                        <button onClick={() => dispatch(switchOffMenu())} className="p-1 w-24 h-6 bg-green-300 rounded-lg shadow-lg">Cart</button>
                    </Link>
                </div>

                <div className="p-2">
                    <Link to="/profile">
                        <button onClick={() => dispatch(switchOffMenu())} className="bg-green-300 rounded-lg shadow-lg w-24 h-6 p-1">Profile</button>
                    </Link>
                </div>
            </div>
            
            <div>
                <button onClick={() => dispatch(toggleMenu())} className="bg-green-300 w-28 h-12 rounded-lg shadow-lg p-1">ToggleMenu</button>
            </div>
            
        </div>
    )
};

export default Header;