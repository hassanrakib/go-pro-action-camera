import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className='text-4xl font-medium'>Welcome {user?.displayName} to your dashboard!</h2>
        </div>
    );
};

export default DashboardHome;