import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Sidebar from '../components/Sidebar';
import DashboardRouter from '../components/router/DashboardRouter';

const Dashboard = () => {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/api/memos')
      .then(response => setMemos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <DashboardRouter />
        <div className="grid grid-cols-3 gap-4 mt-6">
          {memos.map(memo => (
            <div key={memo.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold">{memo.title}</h3>
              <p>{memo.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
