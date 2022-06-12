import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";
import {  
          DynamicForm,
          FormikAbstract, 
          FormikBasicPage,
          FormikComponents,
          FormikYupPage,
          RegisterFormikPage,
          RegisterPage,
         } from "../Forms/pages";


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
                Form | Manual
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
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/register-formik-page"
              >
                Register |  Formik Page 
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/dynamic-form"
              >
                Dynamic |  Form
              </NavLink>
            </li>
       
          </ul>
        </nav>
        <Routes>
          <Route path="/*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<RegisterPage />} />
          <Route path="/dynamic-form" element={<DynamicForm />} />
          <Route path="/formik-abstract" element={<FormikAbstract />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/register-formik-page" element={<RegisterFormikPage />} />
          <Route path="/formik-components" element={<FormikComponents />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}
