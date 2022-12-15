import { useQuery } from '@tanstack/react-query';
import React from 'react';

const allUsers = () => {

    // const {data} = useQuery({
    //   queryKey:['user'],
    //   queryFn: async () =>{
    //     const res = await fetch('')
    //   }
      
    // })
    return (
        <div>
            <h1 className='text-3xl font-bold text-center'> All uses email</h1>

        </div>
    );
};

export default allUsers;