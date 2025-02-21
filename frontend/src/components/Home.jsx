import React, { useEffect } from 'react'
import Navbar from './shared_components/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared_components/Footer'
import useGetAllJobs from '@/custom_hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  )
}

export default Home