import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../Hookes/useAdmin';
import Loading from '../Loader/Loading';

const AdminRouter = ({ children }) => {
    const { user } = useContext(authContext)
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    if (isAdminLoading) {
        return <Loading></Loading>
    }

    if (isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRouter;