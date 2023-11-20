import React, { ReactNode } from 'react';
import Sidebar from '@/app/ui/dashboard/sidebar/sidebar';
import Navbar from '@/app/ui/dashboard/navbar/navbar';
import styles from '@/app/ui/dashboard/dashboard.module.css';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
