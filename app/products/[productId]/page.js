import React from 'react'

export default async function page ({params}) {
    const {productId} = await params;
  return (
    <div>You are visiting Product {productId}</div>
  )
}
