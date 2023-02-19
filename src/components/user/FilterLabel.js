import React from 'react'

const FilterLabel = ({type,value,name,htmlFor}) => {
  return (
    <>
    <form>
        <input type={type} value={value} name={name} />
        <label htmlFor={htmlFor}>{value}</label>
      </form>
    </>
  )
}

export default FilterLabel