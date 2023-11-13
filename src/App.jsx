import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import TvSeries from "./pages/TvSeries/TvSeries";
import Error404 from "./pages/Error/Error404";
import RootLoayout from "./layouts/RootLoayout";
import Bookmark from "./pages/Bookmark/Bookmark";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./utils/PrivateRoute";
import AuthLayout from "./layouts/AuthLayout";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Toaster position="top-right" />
          <Routes>
            <Route element={<RootLoayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tv-series" element={<TvSeries />} />
              <Route element={<PrivateRoute />}>
                <Route path="/bookmark" element={<Bookmark />} />
              </Route>
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route element={<PrivateRoute />}>
                <Route path="/update" element={<UpdateProfile />} />
              </Route>
            </Route>

            <Route path="*" element={<Error404 />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
