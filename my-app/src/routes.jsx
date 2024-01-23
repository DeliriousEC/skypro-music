import { Routes, Route } from "react-router-dom"
import { Main } from "../src/pages/main/index";
import { NotFound } from "./pages/not-found";
import { Favorites } from "./pages/favorites";
import { Category } from "./pages/category/category";
import { Login } from "./pages/login";
import { Registration } from "./pages/registration";
import { ProtectedRoute } from "./pages/protected-route";
import {PropTypes} from "prop-types"



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

  export default AppRoutes;