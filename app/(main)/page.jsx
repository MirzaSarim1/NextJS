import Link from 'next/link'


const page = () => {
  return (
    <div className='p-2'>
      <h1>Welcome Home!</h1>
      <br />
      <Link href="/products" className='underline'>Products</Link>
      <br />
      <Link href="/articles/123?lang=en" className='underline'>Articles</Link>
      <br />
      <Link href="/order-product" className='underline'>Order Product</Link>
      <br />
      <Link href="/hello" className='underline'>Hello API</Link>
    </div>
  )
}

export default page 