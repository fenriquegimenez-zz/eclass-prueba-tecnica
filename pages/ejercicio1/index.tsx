import React from 'react'
import Image from 'next/image'

import Picture from '../../public/ejercicio1.png'

const Ejercicio1Page = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image src={Picture} alt='Resolución de ejercicio 1' />
    </div>
  )
}

export default Ejercicio1Page
