import React from 'react';
import Dashboard from '../dashboard';
import OverView from '../OverView';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';
import DashboardSearch from '../dashboardSearch';

const Layout = () => {
    return (
        <div className="flex bg-background h-screen overflow-hidden">
        <Sidebar />
            {/* Main Content */}
            <div className="flex-1 w-full bg-grey-200 p-2 pb-20">
                <DashboardSearch/> 
                <Outlet/>
            </div>
            {/* Main Content */}
    </div>
    );
};

export default Layout;
