import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()

    const imageHostKey = process.env.REACT_APP_imgbb;
    const handleAddItem = data => {
        console.log(data);
        const image = data.image[0]

        const formData = new FormData();
        formData.append('image', image);
        // console.log(formData);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const products = {
                        name: data.name,
                        number: data.number,
                        location: data.location,
                        price: data.price,
                        productType: data.productType,
                        product: data.product,
                        photo: imgData.data.url

                    }

                    fetch('https://mobile-server-site.vercel.app/addProducts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`

                        },
                        body: JSON.stringify(products)

                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            toast.success(`product is added success`)
                            navigate('/')
                        })

                }
            })
    }






    return (

        <div className='font-serif'>
            <h1 className=' text-2xl font-bold my-16 text-center'>Add Products</h1>

            <div className='h-[600px] flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h2 className='text-xl text-center'>Add Item</h2>
                    <form onSubmit={handleSubmit(handleAddItem)}>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-medium">Product Name</span>
                            </label>
                            <input type="text"
                                {...register("name", {
                                    required: "not found",
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.product && <p className='text-red-800'>{errors.product?.message}</p>}

                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-medium">Mobile Number</span>
                            </label>
                            <input type="text"
                                {...register("number", {
                                    required: "not found",
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-800'>{errors.name?.message}</p>}

                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-medium">Which type of car do you want to bye?</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs"
                                {...register("productType", {
                                    required: "Add time",
                                })}>

                                <option disabled selected>Product condition!</option>
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>

                            {errors.price && <p className='text-red-800'>{errors.price?.message}</p>}

                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-medium">Location</span>
                            </label>



                            <input type="text"
                                {...register("location", {
                                    required: "Add location",
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.location && <p className='text-red-800'>{errors.location?.message}</p>}

                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-medium">Which type of car do you want to bye?</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs"
                                {...register("product", {
                                    required: "Add time",
                                })}                        >

                                <option disabled selected>Product Type!</option>
                                <option>Smart Phone</option>
                                <option>IPad</option>
                                <option>Button Phone</option>
                            </select>


                            {errors.price && <p className='text-red-800'>{errors.price?.message}</p>}

                        </div>



                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-medium">Price</span>
                            </label>
                            <input type="text"
                                {...register("price", {
                                    required: "Add price",
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.price && <p className='text-red-800'>{errors.price?.message}</p>}

                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-medium">Add images</span>
                            </label>
                            <input type="file"
                                {...register("image", {
                                    required: "photo is required",
                                })}
                                className="input " />
                            {errors.image && <p className='text-red-800'>{errors.image?.message}</p>}

                        </div>


                        <input className='btn w-full mt-4 text-white' value='submit' type="submit" />
                    </form>

                </div>
            </div>

        </div>

        // <div className='font-serif'>
        //     {/* <h2 className='text-3xl text-center font-bold'> Add products</h2> */}


        //     <div className="hero ">
        //         <div className="hero-content ">
        //             <form onSubmit={handleProduct} className="card flex-shrink-0 max-w-[1440px] shadow-2xl bg-base-100 py-10">
        //                 <h1 className="text-4xl font-bold text-center mt-2 font-serif">Add Products</h1>

        //                 <div className="card-body w-full">
        //                     <div className='flex  gap-2'>
        //                         <div className="form-control">
        //                             <label className="label">
        //                                 <span className="label-text font-serif">Name</span>
        //                             </label>
        //                             <input name='name' type="text" placeholder="Name" className="input input-bordered " />
        //                         </div>
        //                         <div className="form-control">
        //                             <label className="label">
        //                                 <span className="label-text font-serif">Price</span>
        //                             </label>
        //                             <input name='price' type="text" placeholder="set price" className="input input-bordered " />
        //                         </div>
        //                     </div>


        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text font-serif">Quality</span>
        //                         </label>
        //                         {/* <input name='password' type="password" placeholder="password" className="input input-bordered" /> */}
        //                         <select name='quality' className="select select-bordered w-full ">
        //                             <option disabled selected>Product condition!</option>
        //                             <option>Excellent</option>
        //                             <option>Good</option>
        //                             <option>Fair</option>
        //                         </select>

        //                     </div>

        //                     <div className='flex gap-2'>

        //                         <div className="form-control">
        //                             <label className="label">
        //                                 <span className="label-text font-serif">Number</span>
        //                             </label>
        //                             <input name='number' type="text" placeholder="Give your Number" className="input input-bordered " />
        //                         </div>


        //                         <div className="form-control">
        //                             <label className="label">
        //                                 <span className="label-text font-serif">Location</span>
        //                             </label>
        //                             <input name='location' type="text" placeholder="Location" className="input input-bordered " />
        //                         </div>

        //                     </div>

        //                     <div className="form-control ">
        //                         <label className="label">
        //                             <span className="label-text font-serif">Image</span>
        //                         </label>
        //                         <input name='photo' type="file" placeholder="..." className="input input-bordered " />
        //                     </div>


        //                     <div className='flex gap-2'>

        //                         <div className="form-control w-full">
        //                             <label className="label">
        //                                 <span className="label-text font-serif">Product Type</span>
        //                             </label>
        //                             <select name='product' className="select select-bordered    ">
        //                                 <option disabled selected>product Type</option>
        //                                 <option>Smart Phone</option>
        //                                 <option>Ipad</option>
        //                                 <option>Button Phone</option>
        //                             </select>

        //                         </div>

        //                         <div className="form-control ">
        //                             <label className="label">
        //                                 <span className="label-text font-serif">Year of Purchase</span>
        //                             </label>
        //                             <input name='buyer' type="text" placeholder="...." className="input input-bordered " />
        //                         </div>

        //                     </div>

        //                     <div className="form-control ">
        //                         <label className="label">
        //                             <span className="label-text font-serif">Details</span>
        //                         </label>
        //                         <textarea name='bio' className="textarea textarea-bordered" placeholder="Bio"></textarea>
        //                     </div>



        //                     <div className="form-control mt-6">
        //                         <button className="btn font-serif">ADD ITEM</button>
        //                     </div>


        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>
    );
};

export default AddProducts;