// common
import React from 'react'
// components
import ScrollDownHint from 'components/ScrollDownHint/ScrollDownHint'
// external
import classnames from 'classnames'
// styles
import css from './MainSlides.module.scss'

const MainSlides = ({
  slides,
  slidesQty,
  swipeDirection,
  activeSlide,
  activeSubslide
}) => {
  return (
    <>
      {
        new Array(slidesQty).fill('').map((slide, index) => {
          const Component = slides[index]
          return (
            <div className={css.slide} key={index}>
              <Component
                className={classnames({
                  [css.slideUp]: swipeDirection === 'up' && activeSlide === index,
                  [css.slideDown]: index !== slidesQty - 1 && swipeDirection === 'down' && activeSlide === index,
                })}
                isActive={index === activeSlide}
                activeSubslide={index === slidesQty - 1 && activeSubslide}
              />
              {index === 0 &&
              <ScrollDownHint isVisible={activeSlide === 0} />
              }
            </div>
          )
        })
      }
    </>
  )
}

export default MainSlides
