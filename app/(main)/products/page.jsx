import Link from 'next/link'

const ProductsPage = () => {
  const product = 100;
  return (
    <div className='p-10'>
      <h1 className='pb-10'>Products List</h1>
      <Link href="products/1">Product 1</Link> <br />
      <Link href="products/2">Product 2</Link> <br />
      <Link href="products/3" replace>Product 3</Link> <br />
      <Link href={`products/${product}`}>Product {product}</Link> <br /> {/* Dynamic Linking */}
    </div>
  )
}

export default ProductsPage