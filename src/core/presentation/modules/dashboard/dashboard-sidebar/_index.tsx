'use client';

import { useState } from 'react';

import DashboardSidebarDesktop from './dashboard-sidebar-desktop';
import DashboardSidebarHamburger from './dashboard-sidebar-hamburger';
import DashboardSidebarMobile from './dashboard-sidebar-mobile';

export default function DashboardSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <DashboardSidebarMobile sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <DashboardSidebarDesktop />

      <DashboardSidebarHamburger setSidebarOpen={setSidebarOpen} />
    </div>
  );
}
