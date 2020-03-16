// common
import React from 'react'
// components
import ArrowDown from './_assets/ArrowDown'
// external
import classnames from 'classnames'
// styles
import css from './ScrollDownHint.module.scss'

const ScrollDownHint = ({ isVisible, ...props }) => (
  <div className={classnames(css.wrapper, { [css.wrapperVisible]: isVisible })}>
    <p className={css.label}>
      Листайне вниз
    </p>
    <ArrowDown className={css.icon} />
  </div>
)

export default ScrollDownHint
