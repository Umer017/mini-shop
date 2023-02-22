import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../ContextProvider'
import './Card.css'

const Card = (props) => {

  // const [CartItem,SetCartItem] = useState([])

  const { addItem } = useContext(CartContext)
  const pid = props.id;
  const navigate = useNavigate();

  // const AddToCart = (title,price) =>{
  //   if(CartItem.title === title){
  //     let Qty = CartItem.Qty
  //     SetCartItem({title:title,price:price,Qty:Qty+1})
  //   }else{
  //     let Qty = 1;
  //     SetCartItem({title:title,price:price,Qty:Qty})
  //   }
  //     console.log(CartItem.length)
  // }
  // let imageSrc = "D:/DownloadsBackups/DesktopBackup/New folder/React/mini-ecom-site/mini-shop-admin/public/";
  return (
<>
<div className="card-container m-1" key={props.id}>
<div className="card-image">
    <div className="hidden-features">hidden features</div>
    <img src={`http://192.168.43.247:8080/${props.image}`} alt={props.id} />
</div>
<div class="card-product-details">
    <div class="product-title" onClick={()=> navigate(`/Product/${pid}`)}>{props.title}</div>
    <div class="product-price">Price : {props.price}</div>
</div>
<hr></hr>
<div class="view-product-container">
    <div class="view-product-button"  onClick={()=> navigate(`/Product/${pid}`)}>View Product</div>
    <div class="view-feature">View features</div>
</div>
<hr style={{width: "80%"}}></hr>
</div>
</>

  )
}

export default Card