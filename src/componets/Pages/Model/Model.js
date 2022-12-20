import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const Model = ({ mobileProps, setMobileBooking }) => {
    const { user } = useContext(authContext);

    const navigate = useNavigate();

    const { title, price, image_url, _id } = mobileProps;
    console.log(title);

    const handleBooking = event => {
        event.preventDefault();
        const from = event.target;
        const displayName = from.name.value;
        const email = from.email.value;
        const price = from.price.value;
        const number = from.mobileNumber.value;
        const location = from.location.value;

        const list = {
            image_url,
            displayName,
            email,
            price,
            number,
            location,
            sellingProductsId: _id
        }

        console.log(list);

        fetch('https://mobile-server-site.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(list)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMobileBooking(null)
                if (data.insertedId) {
                    toast.success('booking successful')
                }
                navigate("/dashboard")
            })





    }

    return (
        <div className='font-serif'>

            <input type="checkbox" id="mobile-model" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="mobile-model" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold my-4">{title}</h3>
                    <form onSubmit={handleBooking}>
                        <input name='name' type="text" placeholder="Type here" disabled defaultValue={user.displayName} className="input input-bordered w-full mb-2 " />
                        <input name='email' type="text" placeholder="Type here" disabled defaultValue={user.email} className="input input-bordered w-full  mb-2" />
                        <input name='price' type="text" placeholder="Type here" disabled defaultValue={price} className="input input-bordered w-full  mb-2" />
                        <input name='mobileNumber' type="text" placeholder="Mobile Number" className="input input-bordered w-full  mb-2" />
                        <input name='location' type="text" placeholder="Location" className="input input-bordered w-full  mb-2" />
                        <input type="submit" className='btn w-1/2 ml-24 mt-2 text-warning' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Model;