import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";
import {  FormikAbstract, 
          FormikBasicPage,
          FormikComponents,
          FormikYupPage,
          RegisterPage } from "../Forms/pages";

import logo from "../logo.svg";

export default function Navigation() {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="" />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-basic"
              >
                Formik | Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-yup"
              >
                Formik | Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-components"
              >
                Formik | Components
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-abstract"
              >
                Formik | Abstractaction
              </NavLink>
            </li>
       
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/formik-abstract" element={<FormikAbstract />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-components" element={<FormikComponents />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}
