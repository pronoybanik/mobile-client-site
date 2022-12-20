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
            {/* <h2>hello</h2> */}
            <Nevbar></Nevbar>

            <div className="drawer drawer-mobile ">
                <input id="drawer-box" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-gray-100">
                    <label htmlFor="drawer-box" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80  text-base-content font-serif">
                        <li className='  btn btn-link text-black '><Link to='/dashboard'>ALL ORDERS</Link></li>

                        {
                            isAdmin &&
                            <>
                                <li className='btn btn-link text-black '><Link to='/dashboard/seller'>All seller</Link></li>
                                <li className='btn btn-link text-black '><Link to='/dashboard/byers'>All Byers</Link></li>
                            </>


                        }
                        {
                            isSeller &&
                            <>
                                <li className='btn btn-link text-black '><Link to='/dashboard/orders'>ADD PRODUCT</Link></li>

                            </>
                        }


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayer;