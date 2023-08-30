import React, { useContext } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router";
import GlobalContext from "../resources/GlobalContext";
import NewHeader from "./NewHeader";
import NewFooter from "./NewFooter";

const Layout = ({ children }) => {

  const { theme } = useContext(GlobalContext);
  return (
      <main className={`${theme} flex flex-col w-full`}>
        <NewHeader />
        <div className="w-5/6 flex justify-center mt-2 mb-2">
          <Outlet />
        </div>
        <div className="w-full">
          <NewFooter />
        </div>
      </main>
  );
};

export default Layout;
