import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-60 bg-gray-800 text-white h-screen p-4">
      <ul>
        <li><Link to="/" className="block py-2">Dashboard</Link></li>
        <li><Link to="/memos" className="block py-2">Memos</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
