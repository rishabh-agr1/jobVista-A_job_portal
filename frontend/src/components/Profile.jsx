import React, { useState } from 'react';
import Navbar from './shared_components/Navbar';
import { Avatar, AvatarImage } from './userInterface/avatar';
import { Button } from './userInterface/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './userInterface/badge';
import { Label } from './userInterface/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';
import useGetAppliedJobs from '@/custom_hooks/useGetAppliedJobs';

const isResume = true;

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const { user } = useSelector(store => store.auth);

    return (
        <div className=" min-h-screen">
            <Navbar />
            <div className='max-w-6xl mx-auto grid grid-cols-2 gap-6 my-6'>
                {/* Profile Section */}
                <div className='bg-white border border-gray-200 rounded-2xl shadow-lg p-8'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-6'>
                            <Avatar className="h-24 w-24 border-2 border-gray-300">
                                <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
                            </Avatar>
                            <div>
                                <h1 className='font-semibold text-2xl'>{user?.fullname}</h1>
                                <p className='text-gray-600'>{user?.profile?.bio}</p>
                            </div>
                        </div>
                        <Button onClick={() => setOpen(true)} className="text-gray-700 border border-gray-300" variant="outline">
                            <Pen className="w-4 h-4" />
                        </Button>
                    </div>
                    
                    <div className='my-6'>
                        <div className='flex items-center gap-3 text-gray-700 mb-3'>
                            <Mail className="w-5 h-5" />
                            <span>{user?.email}</span>
                        </div>
                        <div className='flex items-center gap-3 text-gray-700'>
                            <Contact className="w-5 h-5" />
                            <span>{user?.phoneNumber}</span>
                        </div>
                    </div>
                    
                    <div className='my-6'>
                        <h1 className='font-semibold text-lg mb-2'>Skills</h1>
                        <div className='flex flex-wrap gap-2'>
                            {user?.profile?.skills.length !== 0 
                                ? user?.profile?.skills.map((item, index) => <Badge key={index} className="px-3 py-1 text-sm">{item}</Badge>)
                                : <span className='text-gray-500'>NA</span>}
                        </div>
                    </div>
                    
                    <div className='my-6'>
                        <Label className="text-md font-bold">Resume</Label>
                        {isResume ? (
                            <a target='_blank' rel='noopener noreferrer' href={user?.profile?.resume} className='text-blue-600 hover:underline block mt-1'>
                                {user?.profile?.resumeOriginalName}
                            </a>
                        ) : (
                            <span className='text-gray-500'>NA</span>
                        )}
                    </div>
                </div>
                
                {/* Applied Jobs Section */}
                <div className='bg-white rounded-2xl shadow-lg p-6'>
                    <h1 className='font-bold text-lg mb-4'>Applied Jobs</h1>
                    <AppliedJobTable />
                </div>
            </div>
            
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    );
};

export default Profile;