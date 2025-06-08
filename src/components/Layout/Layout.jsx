import { AppBar } from "../AppBar/AppBar";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
}
