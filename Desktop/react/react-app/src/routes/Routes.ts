import { lazy, LazyExoticComponent } from "react";
import { ShoppingPage } from "../components/02-components-patterns/pages/ShoppingPage";
import NoLazy from "../components/Lazyload/pages/NoLazy";
type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<() => JSX.Element> | JSXComponent; 
}

const LazyLayout = lazy(()=> import (/* webpackChunkName:"LazyLayout" */'../components/Lazyload/layout/LazyLayout'))

export const routes: Route[] = [
/*   {
    path: "/lazyload/*",
    to: "/lazyload",
    name: "LazyLayout",
    Component: LazyLayout,
  },
  {
    to: "/nolazy",
    path: "nolazy",
    Component: NoLazy,
    name: "No Lazy",
  },  -------------------------------------Componentes Lazy*/
  {
    to: "/Shopping",
    path: "shopping",
    Component: ShoppingPage,
    name: "shopping page",
  },
];
