import React from "react"
import { AnimeCard } from "./AnimeCard/AnimeCard"
import s from "./AnimeCards.module.scss"
import { useSelector } from "react-redux"
import { dataCards } from "./dataCards"

export const AnimeCards = () => {
  const categories = useSelector(state =>
    state.categories.filter(category => category.selected).map(category => category.title.toLocaleLowerCase())
  )
  const filterCards = dataCards.filter(card => categories.every(category => card.category.some(e => e === category)))

  return (
    <section className={s.animeCards}>
      <div className={s.cards}>
        {filterCards.map(({ id, category, name, avatar }) => (
          <AnimeCard key={id} category={category} name={name} avatar={avatar} />
        ))}
      </div>
    </section>
  )
}
