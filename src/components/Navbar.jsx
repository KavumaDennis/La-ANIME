import React from 'react'

const Navbar = ({ onBackClick, selectedMood }) => {
  return (
    <>
      <div className='navbar center-container bg-slate-100/5 py-2 my-2 rounded-[15px] shadow-xl'>
        <div className='navbar-start'>
          <button
            onClick={onBackClick}
            className='text-3xl btn btn-ghost btn-circle hover:bg-accent transition-all duration-500'
          >
            ⛩️
          </button>
        </div>
        <div className='navbar-center'>
          <a className='btn btn-ghost text-xl'>
            <h1>{selectedMood ? `Mood: ${selectedMood}` : 'La?ANIME'}</h1>
          </a>
        </div>
        <div className='navbar-end'>
          <button onClick={onBackClick} className='btn btn-ghost btn-circle hover:bg-accent transition-all duration-500'>
            <svg
              height='20px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              stroke='#ffffff'
            >
              <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <path
                  d='M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274'
                  stroke='#ffffff'
                  stroke-width='1.5'
                  stroke-linecap='round'
                ></path>{' '}
                <path
                  d='M15 18H9'
                  stroke='#ffffff'
                  stroke-width='1.5'
                  stroke-linecap='round'
                ></path>{' '}
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
