import { Routes, Route } from "react-router-dom"
import { Main } from "../src/Pages/main/index";
import { NotFound } from "./Pages/not-found";
import { Favorites } from "./Pages/favorites";
import { Category } from "./Pages/category/category";
import { Login } from "./Pages/login";
import { Registration } from "./Pages/registration";
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