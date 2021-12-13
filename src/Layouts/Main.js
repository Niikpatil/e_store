import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mt-2 p-5 rounded">
        <div className="col-sm-8 mx-auto">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
