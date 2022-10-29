import CategoryCard from 'components/CategoryCard'
import Header from 'components/Header'
import { data } from 'data/data'
import React from 'react'

function Detail() {
  return (
    <>
    <Header/>
    <CategoryCard categories={data.categories} />
    <div className='details'>Detail of a Product - </div>
    </>
  )
}

export default Detail