import {Routes, Route} from "react-router-dom"
import { Main } from "../src/Pages/Main/index";
import { NotFound } from "./Pages/NotFound";
import { Favorites } from "./Pages/Favorites";
import { Category } from "./Pages/Category/Category";



export const AppRoutes = ({user, setUser}) => {
return(
<Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/Main" element={<Main/>}/>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/Favorites" element={<Favorites/>}/>
    <Route path="/Category/:id" element={<Category/>}/>
</Routes>
);
};