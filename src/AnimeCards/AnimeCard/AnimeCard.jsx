import React from "react"
import s from "./AnimeCard.module.scss"

export const AnimeCard = ({ category, name, avatar }) => {
  return (
    <section className={s.card}>
      <div className={s.avatar}>
        <img src={avatar} alt={name} />
      </div>
      <div className={s.name}>{name}</div>
      <div className={s.category}>{category.join(", ")}</div>
      <div className={s.footer}></div>
    </section>
  )
}
