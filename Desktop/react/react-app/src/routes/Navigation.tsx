import React, { Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./Routes";
export default function Navigation() {
  return (
    <Suspense fallback={<span>cargando...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="" />
            <ul>
              {routes.map(({ to, name, path }) => (
                <li key={path}>
                  <NavLink
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                    to={to}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}
