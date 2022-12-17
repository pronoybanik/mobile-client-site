import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import useSeller from '../Hookes/useSeller';
import Loading from '../Loader/Loading';

const SellerRouter = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const location = useLocation();
    const [isSeller, isSellerLoading] = useSeller(user?.email)
    // const [isAdmin, isAdminLoading] = useAdmin(user?.email)


    if (loading || isSellerLoading) {
        return <Loading></Loading>
    }

    if (user && isSeller) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRouter;