import React from 'react'
import Button from './Button'
import moods from '../assets/moods.js'

const MoodFilter = ({ selectedGenre, toggleGenre }) => {
  return (
    <>
      <h1 className='mood-filter-container my-6 mx-auto grid lg:text-5xl text-4xl font-bold'>
        Discover top-ratedd Anime based on your mood
      </h1>
      <p>How are you feeling right</p>
      <div className='mood-filter-container grid lg:grid-cols-4 grid-cols-3 my-6 lg:gap-6 gap-4'>
        {Object.entries(moods).map(([mood, genre], index) => (
          <div key={genre}>
            <Button
              key={index}
              text={mood}
              className={'btn-outline w-full'}
              onClick={() => toggleGenre(mood, genre)}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default MoodFilter
