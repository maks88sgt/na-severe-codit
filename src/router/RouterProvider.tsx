import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Auth} from "../components/Auth";

export const RouterProvider = () => {
    return <BrowserRouter basename={`/`}>
                <Routes>
                    <Route
                        path={`auth`}
                        element={<Auth />}
                    />
                </Routes>
            </BrowserRouter>
};

export default RouterProvider;
