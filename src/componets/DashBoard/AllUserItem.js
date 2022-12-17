import React from 'react';

const AllUserItem = ({ id, data }) => {
    const { name, email, Role, } = data
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <tbody>

                        <tr>
                            <th>{id + 1}</th>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{Role}</td>
                            <td>Button</td>
                        </tr>


                    </tbody>

                </table>
            </div>



        </div>
    );
};

export default AllUserItem;

