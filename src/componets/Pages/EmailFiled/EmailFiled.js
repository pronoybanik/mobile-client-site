import React from 'react';
import img from '../../../image/appointment.png'
import PrimaryButton from '../../Buttons/PrimaryButton';

const EmailFiled = () => {
    return (
        <section data-aos="zoom-in-down" className='mt-20 py-12 font-serif'
            style={{
                background: `url(${img})`
            }}
        >
            <div className='text-center mb-10 ' >
                <h2 className=' text-info font-bold  mb-2'>Contact Us</h2>
                <h2 className='text-2xl text-white '>Help with us</h2>
            </div>
            <div >
                <div className=' flex  items-center justify-center mb-2'>

                    <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs  " />
                </div>
                <div className='flex  items-center justify-center mb-2'>
                    <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex  items-center justify-center'>
                    <textarea className="textarea textarea-bordered w-80 " placeholder="Bio"></textarea>
                </div>
                <div className='flex  items-center justify-center mt-4'>
                    <PrimaryButton classes='btn btn-sm  px-6 border-none'>submit</PrimaryButton>
                {/* <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-mono btn-sm font-bold">submit</button> */}
                </div>
            </div>


        </section>
    );
};

export default EmailFiled;