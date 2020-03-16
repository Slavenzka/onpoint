import React from 'react'
import css from 'Slides/Slide3-1/Slide3-1.module.scss'
import classnames from 'classnames'
import DiagramSmall from 'assets/icons/slide3-1/DiagramSmall'

const Slide31 = ({ className }) => {
  const diagramData = [
    {
      order: 1,
      textIcon: 'β',
      label: 'β-клетки'
    },
    {
      order: 2,
      icon: 'assets/images/slide3/i-muscle.png',
      label: 'Мышщы'
    },
    {
      order: 3,
      icon: 'assets/images/slide3/i-liver.png',
      label: 'Печень'
    },
  ]

  const diagramContent = diagramData.map((item, index) => (
    <li className={classnames(css.item, css[`item-${index + 1}`])} key={index}>
      <div className={css.itemWrapper}>
        {item.order &&
          <span className={css.order}>
            { item.order }
          </span>
        }
        <p className={css.label}>
          { item.label }
        </p>
      </div>
      {item.textIcon &&
        <span className={css.textIcon}>
          { item.textIcon }
        </span>
      }
      {item.icon &&
        <img
          className={css.icon}
          src={item.icon}
          alt={`Условное обозначение для ${item.label}`}
        />
      }
    </li>
  ))

  return (
    <div className={classnames('slide', css.wrapper, className)}>
      <h3 className={css.title}>
        Звенья патогенеза СД2
      </h3>
      <ul className={css.list}>
        { diagramContent }
      </ul>
      <div className={css.diagram}>
        <h4 className={css.keyNode}>
          Гипергликемия
        </h4>
        <DiagramSmall />
      </div>
    </div>
  )
}

export default React.memo(Slide31)
