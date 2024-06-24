import Layout from "./components/Layout/layout";
import Bag from "./views/pages/bag/Bag";

import Home from "./views/pages/home/Home";
import Node from "./views/pages/node/Node";
import Market from "./views/pages/market/Market";

const routers = [
  
  {
    title: "Home",
    path: "/Home",
    component: Home,
    layout: Layout,
    exact: true,
  },
  {
    title: "Bag",
    path: "/Bag",
    component: Bag,
    layout: Layout,
    exact: true,
  },
  {
    title: "Node",
    path: "/Node",
    component: Node,
    layout: Layout,
    exact: true,
  },
  {
    title: "Market",
    path: "/Market",
    component: Market,
    layout: Layout,
    exact: true,
  },
  
];

export { routers };