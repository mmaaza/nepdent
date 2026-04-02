import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header';
import eventConfig from '../config/eventConfig';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-secondary-50">
      <Header />
      <main className="flex-1 flex flex-col overflow-y-auto">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 print:hidden mt-auto">
        <div className="container mx-auto">
          <p className="text-center">© {new Date().getFullYear()} {eventConfig.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;