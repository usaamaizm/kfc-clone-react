import CategoryCard from 'components/CategoryCard'
import Header from 'components/Header'
import { data } from 'data/data'
import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  
  const {slug} = useParams()
  function convertToSlug(text) {
    return text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  const productCondition= data.products.find((product)=> convertToSlug(product.title) === slug)
  return (
    <>
      <Header/>
      <CategoryCard categories={data.categories} />
      <div className='details'> Detail of a Product - </div>
      <h1> {productCondition.title}</h1>
      <p> {productCondition.description}</p>
    </>
  )
}

export default ProductDetails