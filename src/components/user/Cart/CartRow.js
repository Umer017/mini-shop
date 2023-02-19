import React, { useContext } from 'react'
import { CartContext } from '../../../ContextProvider'
const CartRow = ({title,price,index}) => {
    const {removeItem} = useContext(CartContext);
  return (
    <React.Fragment key={index}>
    <div className='col-4'>{title}</div>
    <div className='col-4'>{price}</div>
    <div className='col-2' style={{color:"red",backgroundColor:"#ffff99"}} onClick={() => removeItem(index,title)}> remove</div>
    <div className='col-2'>{index}</div>
    </ React.Fragment>
  )
}

export default CartRow