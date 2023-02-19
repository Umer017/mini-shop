import React ,{useState,useEffect} from 'react'
import { ProductFetcher } from '../../fetcher'
import Card from './Card'
import './CardContainer.css'
const CardContainer = () => {
    const [Products , setProducts] = useState({});
    useEffect(()=>{
      const fetchit = async () =>{
        const res = await ProductFetcher();
        setProducts(res);
      }
      fetchit();
    },[])

    const displayCard = ()=>{
     const AllCards= [];
     console.log(Products)
     for(let i = 0 ; i<Products.AllProducts?.length;i++){
      //change requie
      AllCards.push(<Card title={Products.AllProducts[i].productTitle} price={Products.AllProducts[i].productPrice} image={Products.AllProducts[i].productImage} Description={Products.AllProducts[i].productDescription} id={Products.AllProducts[i]._id}/>)
     }
     return (
      AllCards
     )
    }
  return (
    <>
    <div className='col-12 display-3'>Products</div>
    <hr></hr>
    <div className='All-cards pt-3'>
        {displayCard()}
    </div>
    <hr></hr>
    </>
  )
}

export default CardContainer