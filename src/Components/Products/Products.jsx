import React, { useEffect } from 'react'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'

export default function Products({changeHref}) {

 
  useEffect(()=>{
    changeHref((window.location.pathname))
  })
  return <div className='mt-4'>

<FeaturedProducts>
    
    </FeaturedProducts>
  </div>
}
