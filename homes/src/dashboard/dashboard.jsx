import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import tres from '../assets/images/tres.jpg';
import dos from '../assets/images/dos.jpg';
import cinco from '../assets/images/cinco.jpg';

const Dashboard = () => {
  return (
    <div className="flex">
    <Sidebar />
    <div className='flex flex-col h-2xl w-full m-10 gap-24'>
    <div className="carousel carousel-center rounded-box flex flex-row ">
      <Link to="/dashboard/properties">
        <div className="carousel-item relative overflow-hidden h-min rounded-xl">
            <img className="h-3xl w-full object-cover rounded-xl transition-transform transition-filter duration-1000 ease-in-out transform scale-100 brightness-50 hover:scale-105 hover:brightness-100" src={dos} alt="Pizza" />
        </div>
        </Link>
        <Link to="/dashboard/users">
        <div className="carousel-item relative overflow-hidden h-min rounded-xl">
            <img className="h-3xl w-full object-cover rounded-xl transition-transform transition-filter duration-1000 ease-in-out transform scale-100 brightness-50 hover:scale-105 hover:brightness-100" src={tres} alt="Pizza" />
        </div>
        </Link>
        <Link to="/dashboard/agents">
        <div className="carousel-item relative overflow-hidden h-min rounded-xl">
            <img className="h-3xl w-full object-cover rounded-xl transition-transform transition-filter duration-1000 ease-in-out transform scale-100 brightness-50 hover:scale-105 hover:brightness-100" src={cinco} alt="Pizza" />
        </div>
        </Link>
    </div>
    
    <h4>asdasds</h4>
    </div>
</div>

  );
};

export default Dashboard;
