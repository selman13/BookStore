import Image from 'next/image'
import React from 'react'

const Language = () => {
  return (
    <div className='flex items-center gap-5'>
        <button>
            <Image src="/aze.png" alt='aze_photo' width={25} height={25}/>
        </button>
        <button>
            <Image src="/uk.png" alt='uk_photo' width={25} height={25}/>
        </button>
    </div>
  )
}

export default Language