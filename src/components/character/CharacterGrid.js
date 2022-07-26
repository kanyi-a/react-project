
import React from 'react'
import CharacterItem from './CharacterItem'
//passing character and isloading destructured
const CharacterGrid = ({ character, isLoading}) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
      <section className='cards'>
      {character.map((character) => (
          
          <CharacterItem key={character.char_id} character={character} ></CharacterItem>
      )
      )}

      </section>
  )
}

export default CharacterGrid