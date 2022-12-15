import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import useSeller from '../Hookes/useSeller';
import Loading from '../Loader/Loading';

const SellerRouter = ({ children }) => {
    const { user } = useContext(authContext)
    const location = useLocation();
    const [isSeller, isSellerLoading] = useSeller(user?.email)
    // const [isAdmin, isAdminLoading] = useAdmin(user?.email)


    if (isSellerLoading) {
        return <Loading></Loading>
    }

    if (isSeller) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRouter;