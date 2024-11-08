import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const Layout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container"></div>
      <div className="wrapper">{children}</div>
    </main>
  );
};

export default Layout;
