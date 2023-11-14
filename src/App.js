import { Fragment } from "react";
import Layout from "./higherOrderComponents/Layout";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import { Home } from "./pages/Home";
import { ErrorBlock } from "./pages/ErrorBlock";
import { Dashboard } from "./pages/Dashboard";
import Register from "./pages/auth/Register";
import PrivateRoute from "./higherOrderComponents/PrivateRoute";
import ResetPassword from "./pages/auth/ResetPassword";
import AdminDashboard from "./pages/AdminDashboard";
function App() {
  return (
    <Fragment>
      {/*Root router for browser*/}
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
           
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            
            <Route element={<PrivateRoute  />}>
              {/* <Route path="home" element={<Home />} /> */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admindashboard" element={<AdminDashboard />} />
            </Route>
          </Route>
          <Route path="/api/user/reset/:id/:token" element={<ResetPassword/>}/>
          {/* for any invalid path */}
          <Route path="*" Component={ErrorBlock} />
        </Routes>

      </BrowserRouter>
    </Fragment>
  );
}

export default App;
