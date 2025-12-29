"use client"

import React from 'react'
import { usePathname } from 'next/navigation'

const notfound = () => {
  const pathName = usePathname();
  const productId = pathName.split('/')[2];
  const reviewId = pathName.split('/')[4];
  return (
    <div>Review {reviewId} does not exist for Product {productId}</div>
  )
}

export default notfound