// "use client"
import Link from 'next/link'
// import { use } from 'react';

async function page ({params, searchParams}) {
// function page ({params, searchParams}) {
    const {articleId} = await params;
    const {lang = "en"} = await searchParams;
    // const {articleId} = use(params);
    // const {lang = "en"} = use(searchParams;)
  return (
    <div>
        <h1>News Article {articleId}</h1>
        <p>Readinfg in language {lang}</p>

        <div className='pt-10'>
            <Link href={`/articles/${articleId}?lang=en`} className='px-3'>English</Link>
            <Link href={`/articles/${articleId}?lang=ur`} className='px-3'>Urdu</Link>
            <Link href={`/articles/${articleId}?lang=fr`} className='px-3'>French</Link>
        </div>
    </div>
  )
}

export default page