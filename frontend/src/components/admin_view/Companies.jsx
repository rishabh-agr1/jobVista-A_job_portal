import React, { useEffect, useState } from 'react'
import Navbar from '../shared_components/Navbar'
import { Input } from '../userInterface/input'
import { Button } from '../userInterface/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/custom_hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'

const Companies = () => {
    useGetAllCompanies();
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setSearchCompanyByText(input));
    },[input]);
    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10'>
                <div className='flex items-center justify-between my-5'>
                    <Input
                        className="w-fit"
                        placeholder="Filter by name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={() => navigate("/admin/companies/create")}>New Company</Button>
                </div>
                <CompaniesTable/>
            </div>
        </div>
    )
}

export default Companies