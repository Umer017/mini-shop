import React, { useEffect, useState } from 'react'
import { ProductFetcher } from '../../fetcher';
import './SearchBar.css'

const SearchBar = (props) => {

  const [searchTerm , setSearchTerm] = useState('');
  const [Products , setProducts] = useState([]);
  useEffect(()=>{
      const fetchit = async () =>{
        const res = await ProductFetcher('/Products'+`?q=${searchTerm}`);
        console.log(res)
        setProducts(res);
      }
      fetchit();
  },[searchTerm]);

  const SearchTerm = (Term) =>{
    setSearchTerm(Term)
  }

  return (
    <>
    <form className={`filter-form`}>
        <label for="filter-search"/>
        <input type="text" name='filter-search' onChange={(event) => SearchTerm(event.target.value)}  id='filter-search' placeholder='search' className={`${props.MyClass}`} />
    </form>
    </>
  )
}

export default SearchBar