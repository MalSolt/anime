import React from "react"
import s from "./Header.module.scss"

export const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <h1 className={s.heading}>Anime</h1>
      </div>
    </header>
  )
}
