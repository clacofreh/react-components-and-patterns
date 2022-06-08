import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";
import { LazyPage1 , LazyPage2, LazyPage3 } from "../components/Lazyload/pages/";

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
                to="/lazy1"
              >
                lazy1
              </NavLink>
            </li>
            <li>
              <NavLink 
               className={({ isActive }) => (isActive ? "nav-active" : "")}
              to="/lazy2">lazy2</NavLink>
            </li>
            <li>
              <NavLink 
               className={({ isActive }) => (isActive ? "nav-active" : "")}
              to="/lazy3">lazy3</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/*" element={<Navigate to="/lazy1" replace />} />
          <Route path="/lazy1" element={<LazyPage1/>} />
          <Route path="/lazy2" element={<LazyPage2/>} />
          <Route path="/lazy3" element={<LazyPage3/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
