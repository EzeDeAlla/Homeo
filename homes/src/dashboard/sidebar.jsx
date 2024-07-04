import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-col-blue text-white w-64 min-h-screen p-4">
      <h3 className="text-2xl font-bold mb-4">Dashboard</h3>
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/dashboard" className="block p-2 rounded hover:bg-blue-600">
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/properties" className="block p-2 rounded hover:bg-blue-600">
              Propiedades
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/users" className="block p-2 rounded hover:bg-blue-600">
              Usuarios
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/agents" className="block p-2 rounded hover:bg-blue-600">
              Agentes
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
