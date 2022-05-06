import { useRouter } from 'next/router'
import React from 'react'

const CharacterPage = () => {
  const { query } = useRouter()
  const { id } = query
  return <div>CharacterPage</div>
}

export default CharacterPage
