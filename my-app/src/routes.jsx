import { Routes, Route } from "react-router-dom"
import { Main } from "../src/Pages/Main/index";
import { NotFound } from "./Pages/NotFound";
import { Favorites } from "./Pages/Favorites";
import { Category } from "./Pages/Category/Category";
import { Login } from "./Pages/Login";
import { Registration } from "./Pages/Registration";
import { ProtectedRoute } from "./Pages/protected-route";




export const AppRoutes = ({ user, setUser }) => {
    return (
        <Routes>

            <Route path="*" element={<NotFound />} />

            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route path="/Favorites" element={<Favorites />} />
                <Route path="/Category/:id" element={<Category />} />
                <Route path="/" element={<Main />} />
                <Route path="/Main" element={<Main />} />
            </Route>

            <Route path="/Login" element={<Login setUser={setUser} />} />
            <Route path="/Registration" element={<Registration />} />

            <Route />
        </Routes>
    );
};