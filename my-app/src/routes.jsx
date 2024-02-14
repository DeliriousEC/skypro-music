import { Routes, Route } from "react-router-dom";
import { Main } from "../src/pages/main/index";
import { NotFound } from "./pages/not-found";
import { Favorites } from "./pages/favorites";
import { Category } from "./pages/category/category";
import { ProtectedRoute } from "./pages/protected-route";
import Register from "./pages/register/register.jsx";
import Login from "./pages/login/index.jsx";


export const AppRoutes = ({ user, handleLogout}) => {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />

            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route path="/Favorites" element={<Favorites />} />
                <Route path="/Category/:id" element={<Category />} />
                <Route path="/"
          element={<Main user={user} handleLogout={handleLogout} />} />
                <Route path="/Main" element={<Main />} />
            </Route>

            <Route path="/login" element={<Login user={user} />} />
         <Route path="/register" element={<Register user={user} />} />

        </Routes>
    );
};

  export default AppRoutes;