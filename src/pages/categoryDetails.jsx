import CategoryCard from 'components/CategoryCard';
import Header from 'components/Header'
import { data } from 'data/data';
import React from 'react'

function CategoryDetails() {
  return (
    <>
    <Header/>
    <CategoryCard categories={data.categories} />
    <div className='categorydetails'> Detail of a Product - </div>
    </>
  )
}

export default CategoryDetails;