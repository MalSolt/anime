import React from "react"
import s from "./Categories.module.scss"
import cl from "classnames"
import { useDispatch, useSelector } from "react-redux"
import { toggleSelected, clearSelected } from "../redux/reducers/categoriesReducer"

export const Categories = () => {
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()

  const buttons = categories.map(category => (
    <button
      onClick={() => dispatch(toggleSelected(category.id))}
      className={cl(s.category, {
        [s.categorySelected]: category.selected,
      })}
      key={category.id}
    >
      {category.title}
    </button>
  ))

  return (
    <section className={s.categories}>
      <div className="container">
        {buttons}
        {categories.some(e => e.selected) && (
          <button onClick={() => dispatch(clearSelected())} className={s.clear}>
            Очистить
          </button>
        )}
      </div>
    </section>
  )
}
