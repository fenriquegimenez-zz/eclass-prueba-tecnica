import React from 'react'

interface NickNames {
  nicknames: string[]
  order: 'ASC' | 'DES'
}

const ListNickNames = ({ nicknames, order }: NickNames) => {
  const filteredList = nicknames.filter(nickname => nickname !== '')
  const sortedList =
    order === 'ASC' ? filteredList.sort() : filteredList.sort().reverse()

  return (
    <ul>
      {sortedList.map((nickname, index) => (
        <li key={index}>{nickname}</li>
      ))}
    </ul>
  )
}

export default ListNickNames
