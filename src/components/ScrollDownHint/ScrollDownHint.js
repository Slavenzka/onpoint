import React from 'react'
import css from './ScrollDownHint.module.scss'
import ArrowDown from './_assets/ArrowDown'
import classnames from 'classnames'

const ScrollDownHint = ({ isVisible, ...props }) => (
  <div className={classnames(css.wrapper, { [css.wrapperVisible]: isVisible })}>
    <p className={css.label}>
      Листайне вниз
    </p>
    <ArrowDown className={css.icon} />
  </div>
)

export default ScrollDownHint
