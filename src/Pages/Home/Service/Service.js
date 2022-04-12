import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ room }) => {
    const navigate = useNavigate()
    const { service, price } = room
    return (
        <div className="shadow-lg rounded-2xl bg-white p-4 w-[260px] mt-16">
            <p className='font-serif text-slate-500'>Service Name: {service}</p>
            <p className='font-serif text-slate-500'>Service Name: ${price}</p>
            <button onClick={() => navigate('/check')} className='bg-lime-500 rounded-lg text-black p-2 font-serif mt-3'>Check</button>
        </div>
    );
};

export default Service;