import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

const MainFolder = () => {

    const shouldOpenSideBar = useSelector((store) => store.menu.shouldOpenSideBar);

    return (
        <div>
            <Header/>
            <div className="flex">
                {shouldOpenSideBar && <SideBar/>}
                <Outlet/>
            </div>
            
        </div>
    )
};

export default MainFolder;