import { createBrowserRouter } from "react-router-dom";
import MainFolder from "../components/MainFolder";
import LiveChatBox from "../components/LiveChatBox";
import DefaultBody from "../components/DefaultBody";
import Cart from "../components/Cart";
import Profile from "../components/Profile";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainFolder/>,
        children: [
            {
                path: "/",
                element: <DefaultBody/>,
                children: []
            },
            {
                path: "/chatbox",
                element: <LiveChatBox/>,
                children: []
            },
            {
                path: "/cart",
                element: <Cart/>,
                children: []
            },
            {
                path: "/profile",
                element: <Profile/>,
                children: []
            }
        ]
    }
]);

export default AppRoutes;