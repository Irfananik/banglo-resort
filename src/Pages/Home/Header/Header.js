import React from 'react';
import { Link } from 'react-router-dom';
import useFirbase from '../../../hooks/useFirebase';
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
    const {user, handlelogout} = useFirbase()
    return (
        <div className="sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between">
            <div className="hidden md:block">
                <Link to='/' className="font-sans font-bold text-3xl text-emerald-500">Banglo Resort</Link>
            </div>
            <div className="text-xl flex gap-4">
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            { user?.uid ? <button onClick={handlelogout}>Logout</button>   :<CustomLink to='/login'>Login</CustomLink>}
            </div>
        </div>
    );
};

export default Header;