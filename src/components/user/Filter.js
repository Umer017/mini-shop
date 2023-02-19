import React from 'react'
import './Filter.css'
import FilterLabel from './FilterLabel'
import SearchBar from './SearchBar'

const Filter = () => {

  var productBrands =[{
    id:1,
    name:'lenovo'
  },
  {
    id:2,
    name:'Hp'
  },
]
 
const renderCheckBox = () => {
  var checkboxes = [];
  for (let i = 0 ; i<productBrands.length;i++){
    checkboxes.push(<FilterLabel type="checkbox" value={productBrands[i].name} name={productBrands[i].name} htmlFor={productBrands[i].name} key={productBrands[i].id} />)
  }
  return checkboxes
}

  return (
    <div className='col-12 p-3'>
        <SearchBar MyClass="side-search"/>
    <div className='checkBox'>
     <h4>Brands :-</h4>
     {renderCheckBox()}
    </div>
    </div>
  )
}

export default Filter