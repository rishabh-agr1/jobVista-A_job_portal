import React, { useState } from 'react'
import { Button } from './userInterface/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>Your Next Career Starts Here</span>
                <h1 className='text-5xl font-bold'>Search, Apply & <br /> Unlock Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p>Discover top job opportunities, connect with employers, and unlock your career potential with ease.</p>
                <div className='flex w-[40%] shadow-2xl border border-gray-500 pl-3 bg-gray-100 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Looking for your next role?'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full bg-gray-100 color-red-100 placeholder-gray-600'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection