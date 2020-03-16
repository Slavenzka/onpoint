// common
import React from 'react'
// external
import classnames from 'classnames'
// styles
import css from './Slide2.module.scss'

const Slide2 = ({ className }) => (
  <div className={classnames('slide', css.wrapper, className)}>
    <h2 className={css.title}>
      Основа терапии&nbsp;&mdash; патогенез СД2
    </h2>
  </div>
)

export default Slide2
