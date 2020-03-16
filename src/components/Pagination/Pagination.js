import React from 'react'
import css from './Pagination.module.scss'
import classnames from 'classnames'

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
