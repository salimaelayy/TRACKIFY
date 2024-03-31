import React from 'react';
import Sidebar from './sidebar';

const Dashboard = ({ children }) => {
    return (
        <div className="flex bg-gray-200 h-screen overflow-hidden">
            <Sidebar />
            {/* Main Content */}
            <div className="flex-1 w-full bg-grey-200 p-2 pb-20">
                {children}
            </div>
        </div>
    );
};

export default Dashboard;
