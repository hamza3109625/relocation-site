import React from 'react'
import Content from './Content'

const Footer = () => {
  return (
    <div className='relative h-[600px] bg-amber-100' style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}>
      <div className='fixed h-[6s00px] w-full bottom-0  '>
<Content />
      </div>
    </div>
  )
}

export default Footer
