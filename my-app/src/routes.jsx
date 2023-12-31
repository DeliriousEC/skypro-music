import {Routes, Route} from "react-router-dom"
import { Main } from "../src/Pages/Main/index";
import { NotFound } from "./Pages/NotFound";


export const AppRoutes = () => {
return(
<Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/Main" element={<Main/>}/>
    <Route path="*" element={<NotFound/>}/>
</Routes>
);
};