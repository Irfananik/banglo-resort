import React, { useEffect, useState } from 'react';
import useFirbase from '../../../hooks/useFirebase';
import Service from '../Service/Service';

const Services = () => {
    const {user} = useFirbase()
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetch("data.json")
            .then(response => response.json())
            .then(data => setRooms(data))
    }, [])
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <p className='text-center text-3xl font-bold text-emerald-500'>Our Available Services</p>
            <p className='text-center text-2xl font-bold text-emerald-400'>Logged in as: {user?.displayName}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center mt-20'>
                {
                    rooms.map(room => <Service key={room.id} room={room} />)
                }
            </div>
        </div>
    );
};

export default Services;