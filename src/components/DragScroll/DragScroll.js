// common
import React, { Component } from 'react'
//styles
import css from './DragScroll.module.scss'

class DragScroll extends Component {
  constructor (props) {
    super(props)
    this.thumbRef = null
    this.lineRef = null
  }

  state = {
    isDragging: false,
    minX: 0,
    maxX: 0,
    originalX: 0,
    translateX: 0,
    lastTranslateX: 0,
  }

  setThumbRef = el => {
    this.thumbRef = el
  }

  setLineRef = el => {
    this.lineRef = el
  }

  componentDidMount () {
    const lineWidth = this.lineRef.getBoundingClientRect().width
    const thumbRect = this.thumbRef.getBoundingClientRect()

    this.setState(prevState => {
      return {
        ...prevState,
        maxX: thumbRect.left,
        minX: thumbRect.left - lineWidth
      }
    })
  }

  componentWillUnmount() {
    this.thumbRef.removeEventListener('mousemove', this.handleTouchMove)
    this.thumbRef.removeEventListener('mouseup', this.handleTouchUp)
  }

  handleTouchDown = evt => {
    this.thumbRef.addEventListener('touchmove', this.handleTouchMove)
    this.thumbRef.addEventListener('touchend', this.handleTouchUp)

    this.setState({
      originalX: evt.touches[0].clientX,
      isDragging: true
    })
  }

  defineActiveSlide = () => {
    const { translateX } = this.state
    const { setActiveSlide, slides } = this.props

    const qty = slides.length
    const lineLength = this.lineRef.getBoundingClientRect().width

    // TODO avoid hardcoded slides qty on lines 66 & 70

    if (-translateX <= lineLength / (qty + 1)) {
      setActiveSlide(qty - 1)
    }

    if (-translateX > lineLength / (qty + 1) && -translateX < 3 * lineLength / (qty + 1)) {
      setActiveSlide(qty - 2)
    }

    if (-translateX >= 3 * lineLength / (qty + 1)) {
      setActiveSlide(qty - 3)
    }
  }

  handleTouchMove = evt => {
    const { minX, maxX, isDragging } = this.state;

    if (!isDragging) {
      return
    }

    this.defineActiveSlide()

    this.setState(prevState => {
      let newThumbShift = evt.touches[0].clientX - prevState.originalX + prevState.lastTranslateX

      if (evt.touches[0].clientX > maxX) {
        newThumbShift = 0
      }

      if (evt.touches[0].clientX < minX) {
        newThumbShift = -this.lineRef.getBoundingClientRect().width
      }

      return {
        ...prevState,
        translateX: newThumbShift
      }
    })
  }

  handleTouchUp = () => {
    this.thumbRef.removeEventListener('mousemove', this.handleTouchMove)
    this.thumbRef.removeEventListener('mouseup', this.handleTouchUp)

    const { activeSlide } = this.props
    const { translateX } = this.state
    const length = this.lineRef.getBoundingClientRect().width
    let finalShift = this.state.translateX

    if (activeSlide === 2 && translateX !== 0) {
      finalShift = 0
    } else if (activeSlide === 1 && Math.abs(translateX) !== length / 2) {
      finalShift = -length / 2
    } else if (activeSlide === 0 && Math.abs(translateX) !== length) {
      finalShift = -length
    }

    this.setState(
      {
        originalX: 0,
        translateX: finalShift,
        lastTranslateX: finalShift,

        isDragging: false
      })
  }

  render () {
    const { translateX, maxX, minX } = this.state

    return (
      <div className={css.wrapper} ref={this.setLineRef}>
        <div className={css.lineBg} />
        <div className={css.line} style={{ transform: `scaleX(${ 1 - translateX / (minX - maxX) })` }} />
        <div className={css.thumb}
             ref={this.setThumbRef}
             onTouchStart={this.handleTouchDown}
             style={{ transform: `translateX(${translateX}px)` }}
        />
      </div>
    )
  }
}

export default DragScroll
