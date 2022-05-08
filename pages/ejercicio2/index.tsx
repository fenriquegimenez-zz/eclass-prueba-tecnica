import React from 'react'
import Image from 'next/image'

import Picture from '../../public/ejercicio2.png'

const Ejercicio2Page = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        src={Picture}
        alt='Resolución de ejercicio 2'
        height={800}
        objectFit='contain'
      />
    </div>
  )
}

export default Ejercicio2Page
