import React, { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>Sidebar</div>
      <div>
        <div>Navbar</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
