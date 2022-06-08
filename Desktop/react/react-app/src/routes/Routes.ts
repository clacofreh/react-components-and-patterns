import { lazy, LazyExoticComponent } from "react";
/* import { LazyPage1, LazyPage2, LazyPage3 } from "../components/Lazyload/pages"; */
type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<() => JSX.Element> | JSXComponent; 
}

const lazy1 = lazy(()=> import ('../components/Lazyload/pages/LazyPage1'))
const lazy2 = lazy(()=> import ('../components/Lazyload/pages/LazyPage2'))
const lazy3 = lazy(()=> import ('../components/Lazyload/pages/LazyPage3'))

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: lazy1,
    name: "lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: lazy2,
    name: "lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: lazy3,
    name: "lazy-3",
  },
];
