import React from 'react'
import upArrow from '../assets/uprow.png'
export default function Landing() {
  return (
    <div className="heading-center">
      <h1>
        Choose from the options{' '}
        <span>
          <img
            src={upArrow}
            width={48}
            height={48}
            alt="see above"
          />
        </span>
        above
      </h1>

      <p>Find a ton of great resources on each of these subjects</p>
    </div>
  )
}
