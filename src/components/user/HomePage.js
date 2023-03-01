import React  from 'react'
import Filter from './Filter'
import './HomePage.css'
import { Outlet } from 'react-router-dom'

const HomePage = () => {

 
  return (
    <>
    <div className='col-12 background2'>
    <div className='row m-0'>
    <div className='col-lg-2 col-md-2 col-sm-2 background'>
    <Filter/>
    </div>
    <Outlet/>
    </div>
    </div>
    </>
  )
}

export default HomePage