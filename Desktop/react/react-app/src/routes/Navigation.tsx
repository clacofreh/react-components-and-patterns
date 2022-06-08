import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";
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
              to="/about">about</NavLink>
            </li>
            <li>
              <NavLink 
               className={({ isActive }) => (isActive ? "nav-active" : "")}
              to="/users">users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>home</h1>} />
          <Route path="/*" element={<Navigate to="/" replace />} />
          <Route path="users" element={<h1>users</h1>} />
          <Route path="/about" element={<h1>about</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
