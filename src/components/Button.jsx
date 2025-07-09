import React from 'react'

const Button = ({ onClick, disabled, className, text }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} btn btn-accent uppercase text-sm md:text-md lg:text-base font-bold py-6`}
    >
      <p className='text-white'>{text}</p>
    </button>
  )
}

export default Button
