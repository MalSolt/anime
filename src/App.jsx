import React from "react"
import { AnimeCards } from "./AnimeCards/AnimeCards"
import { Categories } from "./Categories/Categories"
import { Header } from "./Header/Header"

export const App = () => {
  return (
    <>
      <Header />
      <Categories
        categories={[
          { id: 1, title: "Комедия", selected: false },
          { id: 2, title: "Приключение", selected: true },
          { id: 3, title: "Сенен", selected: false },
          { id: 4, title: "Драма", selected: true },
          { id: 5, title: "Боевик", selected: true },
          { id: 6, title: "Повседневность", selected: false },
        ]}
      />
      <AnimeCards />
    </>
  )
}
