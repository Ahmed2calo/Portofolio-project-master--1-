import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-grey-900 text-white min-h-screen">
      {children}
    </div>
  );
};

export default Layout;
