import React, { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';

const Model = ({ mobileProps }) => {
    const { user } = useContext(authContext);

    // const navigate = navigator();

    const { title } = mobileProps;
    console.log(title);

    return (
        <div>

            <input type="checkbox" id="mobile-model" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="mobile-model" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold my-4">{title}</h3>
                    <form >
                        <input type="text" placeholder="Type here" disabled defaultValue={user.displayName} className="input input-bordered w-full mb-2 " />
                        <input type="text" placeholder="Type here" disabled defaultValue={user.email} className="input input-bordered w-full  mb-2" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Model;