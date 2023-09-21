import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Swal from 'sweetalert2';
import useCart from '../../../../hooks/useCart';

const MyCart = () => {

    const [cart, refetch] = useCart();

    const { id } = useParams()
    const handleDelete = users => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addClass/${users._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    const handleSubmit = users => {
        users.productId = id

        fetch("http://localhost:5000/order", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(users)
        })
            .then((res) => res.json())
            .then((result) => {
                window.location.replace(result.url)
                console.log(result)
            })
    }



    return (
        <div className="w-full">
            <h3 className="text-3xl font-semibold my-4">Selected Class:  </h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>#</th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((users, index) => <tr key={users._id}>
                                <th>{index + 1}</th>
                                <td><img className='rounded-full' src={users.img} alt="" height='100'
                                    width='80' /></td>
                                <td>{users.name}</td>
                                <td>$ {users.price}</td>
                                <td>
                                    <Link
                                        onClick={() => handleSubmit(users)}
                                    ><button className="btn btn-ghost bg-orange-600  text-white">pay</button></Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(users)}
                                        className="btn btn-ghost bg-orange-600  text-white">delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <Link to="/dashboard" className="btn btn-neutral flex justify-center my-12">Go Back to Dashboard</Link>
            </div>
        </div>
    );
};

export default MyCart;