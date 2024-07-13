import React from 'react'
import Banner from '../components/Banner';
import HomeCards from "../components/HomeCards";
import Listings from "../components/Listings";
import ViewAll from "../components/ViewAll";

const HomePage = () => {
  return (
    <>
        <Banner />
        <HomeCards />
        <Listings />
        <ViewAll /> 
    </>
  )
}

export default HomePage