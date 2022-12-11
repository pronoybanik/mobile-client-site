import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../Buttons/PrimaryButton';

const Registers = () => {

    const handleRegister = event => {
        event.preventDefault()

        const from = event.target
        const userName = from.name.value;
        const userEmail = from.email.value;
        const setRole = from.role.value;
        const password = from.password.value;

        console.log(userName, userEmail, setRole, password);
       
    }
    return (
        <div>
            <div className="text-2xl">register</div>

            <div className="hero ">
                <div className="hero-content ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-4xl font-bold text-center mt-2">Sing UP</h1>
                        <form onSubmit={handleRegister} className="card-body w-96">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select name='role' className="select select-bordered w-full max-w-xs" >
                                    <option>seller</option>
                                    <option>Byes</option>
                                    <option>user</option>
                                </select>


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <p>I Have a Account- <Link to='/login' className='text-sky-400 font-semibold'>Login Now</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                {/* <PrimaryButton classes="btn broder-none w-full">SingUp</PrimaryButton> */}
                                <button className="btn text-white">SingUp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registers;