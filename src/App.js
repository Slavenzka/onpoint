// common
import React, { Component } from 'react';
import Slide1 from 'Slides/Slide1/Slide1'
import Slide2 from 'Slides/Slide2/Slide2'
import Slide3 from 'Slides/Slide3/Slide3'
// components
import css from 'App.module.scss'
import classnames from 'classnames'
import ScrollDownHint from 'components/ScrollDownHint/ScrollDownHint'
import Pagination from 'components/Pagination/Pagination'
import DragScroll from 'components/DragScroll/DragScroll'

class App extends Component {
  constructor (props) {
    super(props)
    this.slides = [Slide1, Slide2, Slide3]
    this.scrollTimeline = [1988, 2009, 2016]
    this.wrapperRef = null
  }

  state = {
    slidesQty: undefined,
    activeSlide: 0,
    activeSubslide: 2,
    yStart: null,
    yEnd: null,
    swipeDirection: null
  }


  componentDidMount () {
    // define the slides qty programmically
    this.setState(prevState => {
      return {
        ...prevState,
        slidesQty: this.slides.length
      }
    })

    // event handler to save the starting y-coord of touch move
    this.wrapperRef.addEventListener('touchstart', this.handleTouchStart)

    // event handler to save the ending y-coord of touch move and to define to touch direction
    this.wrapperRef.addEventListener('touchend', this.handleTouchEnd)
  }

  componentWillUnmount () {
    this.wrapperRef.removeEventListener('touchstart', this.handleTouchStart)
    this.wrapperRef.removeEventListener('touchend', this.handleTouchEnd)
  }

  setWrapperRef = el => {
    this.wrapperRef = el
  }

  handleTouchStart = evt => {
    this.setState(prevState => {
      return {
        ...prevState,
        yStart: evt.changedTouches[0].screenY
      }
    })
  }

  handleTouchEnd = evt => {
    this.setState(prevState => {
      return {
        ...prevState,
        yEnd: evt.changedTouches[0].screenY
      }
    })

    if (this.state.yEnd - this.state.yStart > 0) {
      this.setState(prevState => {
        return {
          ...prevState,
          activeSlide: prevState.activeSlide === 0 ? 0 : prevState.activeSlide - 1,
          swipeDirection: 'up'
        }
      })
    } else if (this.state.yEnd - this.state.yStart < 0) {
      this.setState(prevState => {
        return {
          ...prevState,
          activeSlide: prevState.activeSlide === this.state.slidesQty - 1 ? this.state.slidesQty - 1 : prevState.activeSlide + 1,
          swipeDirection: 'down'
        }
      })
    }
  }

  setActiveSubslide = index => {
    this.setState(prevState => ({
      ...prevState,
      activeSubslide: index
    }))
  }

  render () {
    const {
      slidesQty,
      activeSlide,
      activeSubslide,
      swipeDirection
    } = this.state

    const content = new Array(slidesQty).fill('').map((slide, index) => {
      const Component = this.slides[index]
      return (
        <div className={css.slide} key={index}>
          <Component
            className={classnames({
              [css.slideUp]: swipeDirection === 'up' && activeSlide === index,
              [css.slideDown]: index !== slidesQty - 1 && swipeDirection === 'down' && activeSlide === index,
            })}
            isActive={index === this.state.activeSlide}
            activeSubslide={index === slidesQty - 1 && activeSubslide}
          />
          {index === 0 &&
            <ScrollDownHint isVisible={this.state.activeSlide === 0} />
          }
        </div>
      )
    })

    console.log(activeSubslide)

    return (
      <div
        className={css.container}
      >
        <div
          className={css.wrapper}
          style={{ transform: `translateY(calc(-${activeSlide} * 100vh))` }}
          ref={this.setWrapperRef}
        >
          <div
            className={css.slideWrapper}
            style={{ backgroundImage: 'url("assets/images/slide-bg.jpg")' }}
          >
            { content }
          </div>
        </div>
        <div className={css.pagination}>
          <Pagination data={this.slides} activeSlide={this.state.activeSlide} />
        </div>
        <div className={classnames(css.scroll, { [css.scrollVisible]: activeSlide === slidesQty - 1 })}>
          <DragScroll setActiveSlide={this.setActiveSubslide} slides={this.scrollTimeline} activeSlide={activeSubslide} />
          <ul className={css.timeline}>
            {this.scrollTimeline.map((item, index) => (
              <li className={css.timeitem} key={index}>
                { item }
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
