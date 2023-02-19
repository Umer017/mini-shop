import React, { useContext } from 'react'
import { CartContext } from '../../../ContextProvider'
import CartRow from './CartRow';

const MyCart = () => {
  const {items} = useContext(CartContext);
  let total=0;
console.log(items)

const getCartItems =()=>{
 let cartItems = [];
 if(items.length > 0){
    items.map((item,index) => {
    console.log(item);
    total += parseInt(item.price)
    cartItems.push (<CartRow title = {item.title} price={item.price} index={index}/>);
    })
 }
  return cartItems;
}
  return (
    <div className='col-8'>
      <h1>Your Cart</h1>
      <div className='col-12'>
        <div className='row border mb-3'>
        <div className='col-4'>Product</div>
        <div className='col-4'>Amount</div>
        <div className='col-4'>Action</div>
        </div>
      </div>
      <div className='col-12'>
        <div className='row'>
          {getCartItems()}
        </div>
      </div>
      <div className='col-12 pt-5'>
        <div className='row'>
          <div className='col-4'>TOTAL</div>
          <div className='col-4'><b>{total}</b></div>
          <div className='col-4'><button className='btn btn-primary'>Checkout</button></div>
        </div>
      </div>
    </div>
  )
}

export default MyCart