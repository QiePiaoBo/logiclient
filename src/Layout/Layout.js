// import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router";
const Layout = ({ children }) => {
  return (
    <>
      <main className="light flex flex-col items-center w-full">
        <div className="justify-center h-16 flex items-center fixed top-0 w-full mb-2" >
          <Header />
        </div>
        <div className="w-5/6 flex justify-center mt-28 mb-28">
          <Outlet />
        </div>
        <div className="h-16 fixed bottom-0 w-full mt-2">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Layout;
