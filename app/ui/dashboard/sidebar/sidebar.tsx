import React from 'react';
import styles from './sidebar.module.css';

const Sidebar = () => {
  const menuItems = [
    {
      title: 'Pages',
      list: [
        {
          title: 'Dashboard',
          path: '/dashboard',
          icon: <MdDashboard />,
        },
        {
          title: 'Users',
          path: '/dashboard/users',
          icon: 'users',
        },
        {
          title: 'Products',
          path: '/dashboard/products',
          icon: 'products',
        },
        {
          title: 'Transactions',
          path: '/dashboard/transactions',
          icon: 'transactions',
        },
      ],
    },
  ];

  return <div className={styles.container}>Sidebar</div>;
};

export default Sidebar;
