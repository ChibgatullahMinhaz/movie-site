import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import AuthLayouts from "../Layouts/AuthLayouts";
import App from "../App";
import Home from "../Components/Home/Home";
import LoadingSpinner from "../Components/UI/LoadingSpinner";
import NotFound from "../pages/NotFound";
import AdminLogin from "../Components/Auth/AdminLogin";
import AddMovieWizard from "../Components/Admin/Form/AddMovieWizard";

//* lazy loading
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const AdminLayout = lazy(() => import("../Layouts/AdminLayout"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },

        ]
    },
    {
        path: "/movie/details/:title/:year/:type/:id",
        element:
            <Suspense fallback={<LoadingSpinner size={60} color="#0ea5e9" />}>
                <MovieDetails />
            </Suspense>
    },
    {
        path: 'auth',
        element: <AuthLayouts />,
        children: [
            {
                index: true,
                element: <AdminLogin />
            }]
    },
    {
        path: "/ccc",
        element:
            <Suspense fallback={<LoadingSpinner size={60} color="#0ea5e9" />}>
                <AdminLayout />
            </Suspense>,
        children: [
            {
                index: true,
                element: <AddMovieWizard />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;