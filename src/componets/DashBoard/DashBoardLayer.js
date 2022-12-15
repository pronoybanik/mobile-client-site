import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../Hookes/useAdmin';
import useSeller from '../Hookes/useSeller';
import Nevbar from '../Shers/Nevbar/Nevbar';

const DashBoardLayer = () => {
    const { user } = useContext(authContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Nevbar></Nevbar>

            <div className="drawer drawer-mobile">
                <input id="drawer-box" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-box" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content font-serif">
                        <li className='mb-2  btn btn-ghost'><Link to='/dashboard'>ALL ORDERS</Link></li>

                        {
                            isAdmin &&
                            <>
                                <li className='mb-2  btn btn-ghost'><Link to='/dashboard/allUsers'>All USERS DETAILS</Link></li>
                            </>


                        }
                        {
                            isSeller &&
                            <>
                                <li className='mb-2  btn btn-ghost'><Link to='/dashboard/orders'>ADD PRODUCT</Link></li>

                            </>
                        }


                        {/* {
                            sellers &&
                            <>
                                <li><Link to='/dashboard/addproduct'>Add Products</Link></li>
                            </>
                        }
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                            </>
                        } */}

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayer;