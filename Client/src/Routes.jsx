import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
} from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Academics from "./components/academics";
import AdminDashboard from "./components/adminDashboard";
import UserDashboard from "./components/userDashboard";
import Profile from "./components/profile";
import Scholarship from "./pages/Scholarship";
import Jobs from "./pages/Job";
import Users from "./pages/Users";
import UserJobs from "./components/UserDashbaord/jobs.jsx";
import UserScholarship from "./components/UserDashbaord/scholarships.jsx";
import UserDashboardHome from "./components/UserDashbaord/dashboard.jsx";

const Routes = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/job" element={<Jobs />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path = "/userJobs" element={<UserJobs />} />
        <Route path = "/userScholarships" element = {<UserScholarship />} />
        <Route path = "/user-dashboard-home" element = {<UserDashboardHome />} />
      </ReactRoutes>
    </Router>
  );
};

export default Routes;