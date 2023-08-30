import React, { useContext } from "react";
import { Outlet } from "react-router";
import GlobalContext from "../resources/GlobalContext";
import NewHeader from "./NewHeader";

const Layout = ({ children }) => {

  const { theme } = useContext(GlobalContext);
  return (
      <main className={`${theme} flex flex-col w-full`}>
        <NewHeader />
        <div className="w-full flex justify-center mt-8 mb-2">
          <Outlet />
        </div>
      </main>
  );
};

export default Layout;
