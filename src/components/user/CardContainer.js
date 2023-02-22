import React ,{useState,useEffect} from 'react'
import { ProductFetcher } from '../../fetcher'
import Card from './Card'
import './CardContainer.css'
import Carousel from 'react-elastic-carousel'
const CardContainer = () => {
  const breakPoints = [
   {width :1, itemsToShow: 1},
   {width :550, itemsToShow: 2},
   {width :768, itemsToShow: 3},
   {width :1200, itemsToShow: 4},
  ]
  
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
    <div className='All-cards row col-12 pt-3'>
      <Carousel breakPoints={breakPoints}>
        {displayCard()}
      </Carousel>
    </div>
    <hr></hr>
    </>
  )
}

export default CardContainer