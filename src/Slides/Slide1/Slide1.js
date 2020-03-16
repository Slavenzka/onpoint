import React from 'react'
import classnames from 'classnames'
import css from 'Slides/Slide1/Slide1.module.scss'
import Circles from 'assets/icons/slide1/Circles'

const Slide1 = ({ className, isActive }) => {
  const pins = [
    {
      label: 'Цель по HbA1c',
      size: 'largest',
      top: '1rem',
      left: '112.5rem'
    },
    {
      label: 'Гипогликемия',
      size: 'medium',
      top: '26.4rem',
      left: '44.8rem'
    },
    {
      label: 'Осложнения СД',
      size: 'small',
      top: '49.3rem',
      left: '73.5rem'
    },
    {
      label: 'СС риски',
      size: 'small',
      top: '45rem',
      left: '157.3rem'
    },
  ]

  const pinList = pins.map((pin, index) => (
    <li
      className={classnames(css.item, className, css[`item-${index + 1}`])}
      style={{ top: pin.top, left: pin.left }}
      key={index}
    >
      <Circles className={css[pin.size]} startAnimation={isActive} />
      <p className={css.label}>
        {pin.label}
      </p>
    </li>
  ))

  return (
    <div className={classnames('slide', css.wrapper, className)}>
      <h2 className={css.title}>
        Всегда&nbsp;ли цели терапии СД2 на поверхности?
      </h2>
      <ul className={css.list}>
        { pinList }
      </ul>
    </div>
  )
}

export default Slide1
