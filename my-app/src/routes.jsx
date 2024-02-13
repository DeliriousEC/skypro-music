import { Routes, Route } from "react-router-dom";
import { Main } from "../src/pages/main/index";
import { NotFound } from "./pages/not-found";
import { Favorites } from "./pages/favorites";
import { Category } from "./pages/category/category";
import { ProtectedRoute } from "./pages/protected-route";
import AuthPage from "../src/pages/auth/auth-page";


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

            <Route
        path="/login"
        element={<AuthPage isLoginMode={true}></AuthPage>}
      ></Route>
      <Route
        path="/register"
        element={<AuthPage isLoginMode={false}></AuthPage>}
      ></Route>

      <Route path="*" element={<h2>404</h2>}></Route>
            <Route />
        </Routes>
    );
};

  export default AppRoutes;