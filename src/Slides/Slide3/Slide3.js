import React, { Component } from 'react'
import Slide33 from 'Slides/Slide3-3/Slide3-3'
import Slide32 from 'Slides/Slide3-2/Slide3-2'
import css from './Slide3.module.scss'
import classnames from 'classnames'
import Slide31 from 'Slides/Slide3-1/Slide3-1'

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
      <div className={classnames(css.wrapper, this.props.className)} style={{ transform: `translateX(${ (-activeSubslide) * 100 }vw)` }}>
        { content }
      </div>
    )
  }
}

export default Slide3
