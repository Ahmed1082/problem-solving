
import React from 'react';
import "../../styles/components/navbar/navbar.css";
import Menu from '../menu/Menu';
import { Outlet } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h1>Logo</h1>
      <Menu />
      <button>Login</button>
      <div>
        <Outlet />
      </div>
    </nav>
  );
}