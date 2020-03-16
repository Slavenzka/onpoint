import React from 'react'
import css from './Slide3-3.module.scss'
import classnames from 'classnames'
import DiagramFull from 'assets/icons/slide3-3/DiagramFull'

const Slide33 = ({ className }) => {
  const diagramData = [
    {
      order: 1,
      textIcon: 'β',
      label: 'β-клетки'
    },
    {
      order: 2,
      label: '↓ инкретинового эффекта'
    },
    {
      order: 3,
      label: 'Дефект α-клеток'
    },
    {
      order: 4,
      icon: 'assets/images/slide3/i-lipid.png',
      label: 'Жировые клетки'
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
      label: 'Головной мозг'
    },
    {
      order: 8,
      icon: 'assets/images/slide3/i-gut.png',
      label: 'Микрофлора кишечника'
    },
    {
      order: 9,
      icon: 'assets/images/slide3/i-bacteria.png',
      label: 'Нарушение иммунной регуляции/воспаление'
    },
    {
      order: 10,
      icon: 'assets/images/slide3/i-stomach.png',
      label: 'Желудок'
    },
    {
      order: 11,
      icon: 'assets/images/slide3/i-kidney.png',
      label: 'Почки'
    },
    {
      type: 'amilin',
      label: '↓ амилин'
    },
    {
      type: 'glukagon',
      label: '↑ глюкагон'
    }
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
      <p className={css.subtitle}>
        Инсулинорезистентность
      </p>
      <ul className={css.list}>
        { diagramContent }
      </ul>
      <div className={css.diagram}>
        <h4 className={css.keyNode}>
          Гипергликемия
        </h4>
        <DiagramFull />
      </div>
    </div>
  )
}

export default React.memo(Slide33)
