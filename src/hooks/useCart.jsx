import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
// import { useQuery } from '@tanstack/react-query/build/lib';

const useCart = () => {

    const { user } = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/addClass/${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch]

};

export default useCart;