import React from 'react'
import OfferWall from './OfferWall'
import CardContainer from './CardContainer'

const ProductContainer = () => {
  return (
    <div className='col-md-12 col-lg-10 p-0 col-sm-12 col-12'>
      <OfferWall/>
      <CardContainer />
    </div>
  )
}

export default ProductContainer