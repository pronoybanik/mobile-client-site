import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../Hookes/useAdmin';
import Loading from '../Loader/Loading';

const AdminRouter = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRouter;