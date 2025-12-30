import React from 'react'

async function login () {
  await new Promise((resolve) => {
    setTimeout(()=> {
      resolve("intentional Delay");
    }, 2000);
  })
return (
    <div>login</div>
  )
}

export default login