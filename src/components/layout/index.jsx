import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box display="flex" width="100%">
      <Sidebar />
      <div style={{ width: "100%" }}>
        <Header />
        {children}
        <Footer />
      </div>
    </Box>
  );
};

export default Layout;
