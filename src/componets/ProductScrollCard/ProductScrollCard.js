import React from 'react';
import Marquee from 'react-fast-marquee';
import { BsArrowUpRightCircle } from 'react-icons/bs';

const ProductScrollCard = () => {
    const toolsData = [
        {
            img: "https://images.pexels.com/photos/4065906/pexels-photo-4065906.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "iphone",

        },
        {
            img: "https://images.pexels.com/photos/1657299/pexels-photo-1657299.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "redmi",

        },
        {
            img: "https://images.pexels.com/photos/2064124/pexels-photo-2064124.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "lend line",

        },
        {
            img: "https://images.pexels.com/photos/3999536/pexels-photo-3999536.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "semsung",

        },
        {
            img: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "semsung",

        },


    ];

    return (
        <div className="py-10">

            <Marquee
                pauseOnHover={true}
                gradient={false}
                className="flex my-20 cursor-pointer"
            >
                {toolsData.map((tool, i) => {
                    const { img, title } = tool;
                    return (
                        <div className='mx-2'>
                            <div href="#" class="relative block group">
                                <img
                                    src={img}
                                    alt=""
                                    class="h-[320px] w-[340px] object-cover transition duration-500 group-hover:opacity-90 sm:h-[450px]"
                                />

                                <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                                    <h3 class="text-xl font-medium text-white"> {title}</h3>

                                </div>
                            </div>
                        </div>
                    );
                })}
            </Marquee>
        </div>
    );
};

export default ProductScrollCard;