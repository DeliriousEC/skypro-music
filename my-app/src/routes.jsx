import {Routes, Route} from "react-router-dom"
import { Main } from "../src/Pages/Main/index";
import { NotFound } from "./Pages/NotFound";
import { Favorites } from "./Pages/Favorites";
import { Category } from "./Pages/Category/Category";
import { ProtectedRoute } from "./Pages/protected-route";
import { Login } from "./Pages/Login";
import { Registration } from "./Pages/Registration";



export const AppRoutes = ({user, setUser}) => {
return(
<Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/Main" element={<Main/>}/>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/Login" element={<Login setUser={setUser} />} />
    <Route path="/Registration" element={<Registration/>} />
    <Route path="/Favorites" element={<Favorites/>}/>
    <Route path="/Category/:id" element={<Category/>}/>
    <Route/> 
</Routes>
);
};