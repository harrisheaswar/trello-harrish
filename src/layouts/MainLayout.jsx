import React from "react";
import { Outlet } from "react-router-dom";
import { AppBar, Toolbar, Box } from "@mui/material";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default MainLayout;
