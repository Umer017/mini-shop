import React, { useEffect, useState,useContext } from 'react'
import { useParams } from 'react-router-dom'
import {ProductFetcherById } from '../../fetcher'
import { CartContext } from '../../ContextProvider'


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
       <div className='title'><h1>{ProductDetail.Product?.productTitle}</h1></div>
       <div className='col-12'>
        <div className='row'>
        <div className='col-4'>
            <img className='col-12' src={`http://192.168.43.247:8080//${ProductDetail.Product?.productImage}`} alt={ProductDetail.Product?.productTitle}></img>
            <button onClick={() => addItem({title:ProductDetail.Product?.productTitle,price:ProductDetail.Product?.productPrice,Qty:Qty})}> Add to cart</button>
        </div>
        <div className='col-8'>
            <div className='col-12'><b>product price :</b> {ProductDetail.Product?.productPrice
}</div>
            <div className='col-12'><b>product model :</b>{ProductDetail.Product?.productTitle}</div>
            <hr></hr>
            <div className='col-12'>
                <div className='col-6'>Rating: {'5'} </div>
                <div className='col-6'><button className='btn btn-primary'>write Review</button> </div>
            </div>
            <hr/>
        <div className='col-12'> Description : {ProductDetail.Product?.productDescription}</div>
        </div>
       </div>
       </div>
        
    </div>
  )
}

export default FullProductView