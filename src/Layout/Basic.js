import React,{useContext} from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router";
import GlobalContext from "../resources/GlobalContext";


const Basic = ({ children }) => {
  const {theme} = useContext(GlobalContext);
  return (
    <>
      <main className={`${theme} flex flex-col items-center w-full`}>
        <Header />
        <div className="w-5/6 flex justify-center mt-28 mb-28">
          <Outlet />
        </div>

      </main>
    </>
  );
};

export default Basic;
