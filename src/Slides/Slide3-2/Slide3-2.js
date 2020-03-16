// common
import React from 'react'
// components
import DiagramMedium from 'assets/icons/slide3-2/DiagramMedium'
// external
import classnames from 'classnames'
// styles
import css from 'Slides/Slide3-2/Slide3-2.module.scss'

const Slide32 = ({ className }) => {
  const diagramData = [
    {
      order: 1,
      textIcon: 'β',
      label: 'β-клетки'
    },
    {
      order: 2,
      label: 'Инкретиновый<br/>эффект'
    },
    {
      order: 3,
      label: 'Дефект<br/>α-клеток'
    },
    {
      order: 4,
      icon: 'assets/images/slide3/i-lipid.png',
      label: 'Жировые<br/>клетки'
    },
    {
      order: 5,
      icon: 'assets/images/slide3/i-muscle.png',
      label: 'Мышщы'
    },
    {
      order: 6,
      icon: 'assets/images/slide3/i-liver.png',
      label: 'Печень'
    },
    {
      order: 7,
      icon: 'assets/images/slide3/i-brain.png',
      label: 'Головной<br/>мозг'
    },
    {
      order: 8,
      icon: 'assets/images/slide3/i-kidney.png',
      label: 'Почки'
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
        <p className={css.label} dangerouslySetInnerHTML={{ __html: item.label }} />
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
        Смертельный октет
      </h3>
      <ul className={css.list}>
        { diagramContent }
      </ul>
      <div className={css.diagram}>
        <h4 className={css.keyNode}>
          Гипергликемия
        </h4>
        <DiagramMedium />
      </div>
    </div>
  )
}

export default React.memo(Slide32)
