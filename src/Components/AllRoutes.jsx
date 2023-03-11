import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PrivateRoutes from "./PrivateRoutes";


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<PrivateRoutes><Home/></PrivateRoutes>}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
    );
};

export default AllRoutes;