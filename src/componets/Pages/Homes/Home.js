import React from 'react';
import NeedHelp from '../../NeedHelp/NeedHelp';
import Reviews from '../../Reviews/Reviews';
import EmailFiled from '../EmailFiled/EmailFiled';
import Headers from '../Headers/Headers';
import MobileDetails from '../MobileDetails/MobileDetails';
import ProductDetail from '../ProductDetail/ProductDetail';
import Services from '../Services/Services';
import { BsCarFrontFill } from 'react-icons/bs';
import { CiMoneyBill } from 'react-icons/ci'
import { MdOutlinePayments, MdSecurity } from 'react-icons/md'
import ProductScrollCard from '../../ProductScrollCard/ProductScrollCard';
import Faq from '../../Faq/Faq';

const Home = () => {
    return (
        <div>

            <Headers></Headers>
            {/* 1 st */}
            <section >
                <div className="max-w-screen-lg px-4  mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            New Collection
                        </h2>

                        <p className="max-w-md mx-auto mt-4 text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                            praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                            natus?
                        </p>
                    </header>

                    <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                        <li >
                            <div className="relative block group">
                                <img
                                    src="https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />

                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <h3 className="text-xl font-medium text-white">Casual Trainers</h3>

                                    <span
                                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                    >
                                        Shop Now
                                    </span>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="relative block group">
                                <img
                                    src="https://images.pexels.com/photos/63690/pexels-photo-63690.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />

                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <h3 className="text-xl font-medium text-white">Winter Jumpers</h3>

                                    <span
                                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                    >
                                        Shop Now
                                    </span>
                                </div>
                            </div>
                        </li>

                        <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 ">
                            <div className="relative block group">
                                <img
                                    src="https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />

                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                                    <span
                                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                    >
                                        Shop Now
                                    </span>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>

            {/* 2nd */}
            <section className='flex justify-center'>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mt-24">
                    <div >
                        <div

                            className="relative block lg:h-[290px]  rounded-sm w-96 border  p-4 shadow-xl  lg:p-8 sm:w-full"
                        >
                            <div className='flex justify-center mt-12'>
                                <div className="flex justify-center items-center gap-4 bg-gray-300 w-20 h-20 rounded-full p-6">

                                    <BsCarFrontFill style={{ fontSize: '300', color: '#2E8B57' }}></BsCarFrontFill>
                                </div>
                            </div>

                            <p className="mt-4 font-semibold text-lg text-black text-center ">
                                Super Fast and  free  <br /> delivery
                            </p>
                        </div>
                    </div>

                    <div>
                        <div

                            className="relative block rounded-sm w-96 border   p-4 shadow-xl sm:p-6 lg:p-8"
                        >
                            <div className='flex justify-start '>
                                <div className="flex justify-center items-center gap-4 bg-gray-300 w-20 h-20 rounded-full p-6">
                                    <MdSecurity style={{ fontSize: '400px', color: '#2E8B57' }}></MdSecurity>
                                </div>
                                <p className="mt-2 ml-3   font-semibold text-lg text-black text-center ">
                                    Non- contact <br />
                                    shipping
                                </p>
                            </div>


                        </div>
                        <div

                            className="relative block rounded-sm w-96 border   p-4 shadow-xl sm:p-6 lg:p-8"
                        >
                            <div className='flex justify-start  '>
                                <div className="flex justify-center items-center gap-4 bg-gray-300 w-20 h-20 rounded-full p-6">
                                    <CiMoneyBill style={{ fontSize: '500px', color: '#2E8B57' }}></CiMoneyBill>
                                </div>
                                <p className="mt-3 ml-4  font-semibold text-lg text-black text-center ">
                                    Money-back <br /> Guaranteed
                                </p>
                            </div>


                        </div>

                    </div>

                    <div>
                        <div >
                            <div

                                className=" relative block lg:h-[290px]     rounded-sm w-96 border  p-4 shadow-xl  lg:p-8"
                            >
                                <div className='flex justify-center mt-12'>
                                    <div className="flex justify-center items-center gap-4 bg-gray-300 w-20 h-20 rounded-full p-6">
                                        <MdOutlinePayments style={{ fontSize: '300', color: '#2E8B57' }}></MdOutlinePayments>
                                    </div>
                                </div>

                                <p className="mt-4 font-semibold text-lg text-black text-center ">
                                    super secure payment <br /> system
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductScrollCard></ProductScrollCard>

            <Services></Services>
            <MobileDetails></MobileDetails>
            <ProductDetail></ProductDetail>
            <EmailFiled></EmailFiled>
            <Reviews></Reviews>
            <Faq></Faq>
            <NeedHelp></NeedHelp>

        </div>
    );
};

export default Home;