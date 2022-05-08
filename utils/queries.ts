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
export const GET_SINGLE_CHARACTER = gql`
  query getCharacterByName($id: ID!) {
    character(id: $id) {
      name
      status
      species
      image
      location {
        name
      }
      origin {
        name
      }
    }
  }
`
