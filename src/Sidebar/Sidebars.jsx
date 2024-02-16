import React, { useState } from 'react';
import { RiDashboard3Line } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineInventory2 } from "react-icons/md";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdOutlineLocalShipping } from "react-icons/md";

import './Sidebars.css'

function Sidebar() {
 const [isOpen, setIsOpen] = useState(false);

  const data = [
    {
      title: 'Dashboard',
      path: '/',
      icon: RiDashboard3Line,
    },
    {
      title: 'Inventory',
      path: '/inventory',
      icon: MdOutlineInventory2,
    },
    {
        title: 'Orders',
        path: '/orders',
        icon: LiaClipboardListSolid,
      },
      {
        title: 'Shipping',
        path: '/shipping',
        icon: MdOutlineLocalShipping,
      },
      {
        title: 'Channel',
        path: '/channel',
        icon: FiShare2,
      },
  ];
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <button type="button" onClick={toggleSidebar} className="sidebar-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {data.map((item) => (
            <li key={item.title}>
              <a className="nav-link">
                <item.icon/>
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
