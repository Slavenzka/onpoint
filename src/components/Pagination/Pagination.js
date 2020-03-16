// common
import React from 'react'
// external
import classnames from 'classnames'
// styles
import css from './Pagination.module.scss'

const Pagination = ({ data, activeSlide }) => (
  <ul className={css.paginationList}>
    {data.map((_, index) => (
      <li className={classnames(css.paginationItem, { [css.paginationItemActive]: index === activeSlide })} key={index}>
        { `Слайд номер ${index + 1}`}
      </li>
    ))}
  </ul>
)

export default Pagination
