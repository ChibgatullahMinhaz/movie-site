import React from 'react';
import Navber from './Shared/Navber';
import Sidebar from './Components/Sidebar/Sidebar';

import { Outlet } from 'react-router';

const App: React.FunctionComponent = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <header>
                <nav>
                    <Navber />
                </nav>
            </header>
            <main className="grid grid-cols-1 lg:grid-cols-12 gap-4 px-4">
                {/* Main Content */}
                <div className="lg:col-span-8 order-1 lg:order-1 sm:px-6 my-3.5">
                    <Outlet />
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 order-2 lg:order-2">
                    <Sidebar />
                </div>
            </main>

            <footer className='h-10 flex items-center justify-center text-gray-500 font-semibold shadow-lg border-t border-[#272829]'>
                <span className='text-sm '>©{(new Date().getFullYear())}  by siteName.COM. All Rights Reserved</span>
            </footer>
        </div>
    );
};

export default App;