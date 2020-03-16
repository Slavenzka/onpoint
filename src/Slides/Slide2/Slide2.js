import React from 'react'
import css from './Slide2.module.scss'
import classnames from 'classnames'

const Slide2 = ({ className }) => (
  <div className={classnames('slide', css.wrapper, className)}>
    <h2 className={css.title}>
      Основа терапии&nbsp;&mdash; патогенез СД2
    </h2>
  </div>
)

export default Slide2
