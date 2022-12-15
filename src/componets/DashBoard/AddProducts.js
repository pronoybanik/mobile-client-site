import React from 'react';

const AddProducts = () => {
    return (
        <div>
            <h2 className='text-3xl text-center font-bold'> add products</h2>

            
            <div className="hero ">
                <div className="hero-content ">
                    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-4xl font-bold text-center mt-2 font-serif">add products</h1>
                        <div className="card-body w-96">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn font-serif">Login</button>
                            </div>

                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;