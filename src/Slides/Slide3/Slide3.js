// common
import React, { Component } from 'react'
// components
import Slide31 from 'Slides/Slide3-1/Slide3-1'
import Slide32 from 'Slides/Slide3-2/Slide3-2'
import Slide33 from 'Slides/Slide3-3/Slide3-3'
// external
import classnames from 'classnames'
// styles
import css from './Slide3.module.scss'

class Slide3 extends Component {
  constructor (props) {
    super(props)
    this.slides = [ Slide31, Slide32, Slide33 ]
  }

  render () {
    const { activeSubslide } = this.props

    const content = this.slides.map((slide, index) => {
      const Component = slide
      return (
        <div className={css.slide} key={index}>
          <Component />
        </div>
        )
    })

    return (
      <div
        className={classnames(css.wrapper, this.props.className)}
        style={{ transform: `translateX(${ (-activeSubslide) * 100 }vw)` }}
      >
        { content }
      </div>
    )
  }
}

export default Slide3
