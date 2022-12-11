import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        console.log(email, password);
    }

    return (
        <div>
            <h1 className='text-2xl'> Login </h1>
            <div className="hero ">
                <div className="hero-content ">
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-4xl font-bold text-center mt-2">Login Now</h1>
                        <div className="card-body w-96">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn ">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;