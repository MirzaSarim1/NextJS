import React from 'react'

async function page  ({params}) {
    const {slug} = await params;
    if (slug?.length === 2) {
        return <h1>Viewing Docs for feature {slug[0]} and consept {slug[1]}</h1>
    } else if (slug?.length === 1) {
        return <h1>Viewing Docs for feature {slug[0]}</h1>
    }

    return <h1>Docs Home Page</h1>
}

export default page