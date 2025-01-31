import React from "react";
import { createRoot } from "react-dom/client";
import Routing from "./Routing";
import "./index.css";

const element: any = document.getElementById("root");
const root = createRoot(element);

const Index = () => {
  return <Routing />;
};

root.render(<Index />);
