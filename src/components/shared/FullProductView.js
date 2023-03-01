import React, { useEffect, useState,useContext } from 'react'
import { useParams } from 'react-router-dom'
import {ProductFetcherById } from '../../fetcher'
import { CartContext } from '../../ContextProvider'
import './FullProductView.css'


const FullProductView = () => {

    let Qty = 1;
    const { addItem } = useContext(CartContext)
    const {pid} =  useParams();
    const [ProductDetail,setProducutDetail] = useState([]);
    useEffect(()=>{
        const fetchit = async () =>{
            const returnedProduct = await ProductFetcherById(pid)
            console.log(returnedProduct);
            setProducutDetail(returnedProduct);
            // console.log(ProductDetail)
        }
        fetchit();
    },[pid])
    
  return (
    <div className='col-12'>
        <hr></hr>
       <div className='title txt'><h1>{ProductDetail.Product?.productTitle}</h1></div>
       <hr></hr>
       <div className='col-12'>
        <div className='row'>
        <div className='col-4'>
            <img className='col-12 img' src={`http://127.0.0.1:8080//${ProductDetail.Product?.productImage}`} alt={ProductDetail.Product?.productTitle}></img>
        </div>
        <div className='col-8'>
            <div className='col-12 txt'><h1><b>product price :</b> {ProductDetail.Product?.productPrice
}</h1></div>
            <div className='col-12 txt'><b>product model :</b>{ProductDetail.Product?.productTitle}</div>
            <div className='col-12 txt'><h1> product Brand :<b>{ProductDetail.Product?.productBrand}</b></h1></div>
            <hr></hr>
            <div className='col-12'>
                <div className='col-6 txt'>Rating: {'5'} </div>
                <div className='col-6'><button className='btn btn-primary'>write Review</button> <button className='btn ml=2 btn-primary' onClick={() => addItem({title:ProductDetail.Product?.productTitle,price:ProductDetail.Product?.productPrice,Qty:Qty})}> <img className='btn-img' src='../Resources/BrandLogo/Shopping-Cart.webp'></img>Add to cart</button> </div>
            </div>
            <hr/>
        <div className='col-12 des'> Description : {ProductDetail.Product?.productDescription}</div>
        </div>
       </div>
       </div>
        
    </div>
  )
}

export default FullProductView