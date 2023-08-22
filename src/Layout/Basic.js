// import React from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router";
const Basic = ({ children }) => {
  return (
    <>
      <main className="light flex flex-col items-center w-full">
        <Header />
        <div className="w-5/6 flex justify-center mt-28 mb-28">
          <Outlet />
        </div>

      </main>
    </>
  );
};

export default Basic;
