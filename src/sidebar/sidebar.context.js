import React, { createContext, useState } from "react";

const { Provider, Consumer } = createContext();

function SidebarProvider({ children, isOpenProp }) {
  const [isOpen, setIsOpen] = useState(isOpenProp);
  
  return <Provider value={{ isOpen, setIsOpen }}>{children}</Provider>;
}

export { SidebarProvider, Consumer as SidebarConsumer };
