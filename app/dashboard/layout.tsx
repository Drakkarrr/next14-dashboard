import React, { ReactNode } from 'react';
import Sidebar from '@/app/ui/dashboard/sidebar/sidebar';
import Navbar from '@/app/ui/dashboard/navbar/navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
