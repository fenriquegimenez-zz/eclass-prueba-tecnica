import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query getCharacterByName {
    characters {
      results {
        name
        image
        id
        species
      }
    }
  }
`
