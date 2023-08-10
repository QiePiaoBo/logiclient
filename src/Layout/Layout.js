import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Header children = "Hello"/>
      <main className="light text-foreground bg-background">{children}</main>
      <Footer children = "World"/>
    </>
  );
};

export default Layout;
