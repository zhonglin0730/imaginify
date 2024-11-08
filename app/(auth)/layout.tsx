import React from "react";

const Layout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return <main className="auth">{children}</main>;
};

export default Layout;
