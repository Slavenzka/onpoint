import React from 'react'
import css from './Circles.module.scss'
import classnames from 'classnames'

const Circles = ({
   className,
  // prop to disable animation on inactive slide for smooth transition to 1st slide
   startAnimation
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      viewBox='0 0 110 110'
    >
      <defs>
        <radialGradient id="PSgrad_0">
          <stop offset="0" stopColor="#de791b" stopOpacity="0.16" />
          <stop offset="100%" stopColor="rgb(207,20,55)" stopOpacity="0.16" />
        </radialGradient>

        <radialGradient id="PSgrad_1">
          <stop offset="1%" stopColor="rgb(222,121,27)" stopOpacity="0.62" />
          <stop offset="100%" stopColor="rgb(207,20,55)" stopOpacity="0.62" />
        </radialGradient>

        <linearGradient id='Lingrad_0' x1='0' y1='0' x2='0' y2='100%'>
          <stop offset='0%' stopColor='#cf1437' />
          <stop offset='50%' stopColor='#de791b' />
        </linearGradient>
      </defs>
      <path fillRule="evenodd"  strokeWidth="2px" strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0.22" fill="rgb(247, 139, 31)" stroke="url(#Lingrad_0)"
            d="M54.500,1.999 C83.495,1.999 107.001,25.505 107.001,54.500 C107.001,83.495 83.495,107.001 54.500,107.001 C25.505,107.001 1.999,83.495 1.999,54.500 C1.999,25.505 25.505,1.999 54.500,1.999 Z"/>
      <g opacity='1'>
        <path className={classnames({ [css.core1]: startAnimation })} fill="rgb(247, 139, 31)" strokeWidth="1px" strokeLinecap="round" strokeLinejoin="miter" stroke="url(#Lingrad_0)"
              d="M53.500,38.000 C62.613,38.000 70.000,45.387 70.000,54.500 C70.000,63.613 62.613,71.000 53.500,71.000 C44.387,71.000 37.000,63.613 37.000,54.500 C37.000,45.387 44.387,38.000 53.500,38.000 Z"/>
        <path className={classnames({ [css.core2]: startAnimation })} fill="rgb(247, 139, 31)" strokeWidth="1px" strokeLinecap="round" strokeLinejoin="miter" stroke="url(#Lingrad_0)"
              d="M53.500,38.000 C62.613,38.000 70.000,45.387 70.000,54.500 C70.000,63.613 62.613,71.000 53.500,71.000 C44.387,71.000 37.000,63.613 37.000,54.500 C37.000,45.387 44.387,38.000 53.500,38.000 Z"/>
      </g>
    </svg>
  )
}

export default Circles
