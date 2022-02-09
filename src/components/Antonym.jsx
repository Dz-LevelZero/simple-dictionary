import React from 'react'

const Antonym = ({ mean }) => {
  return (
    <div className='columns-2 md:columns-4'>
      {mean.map(val => val.meanings.map(means => means.definitions.map(def => {
        return def.antonyms?.map(ant => (
          <li key={ant}>{ant}</li>
        )
        )})))}
    </div>
  )
}

export default Antonym