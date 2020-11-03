import React from "react"
import { AnimeCards } from "./AnimeCards/AnimeCards"
import { Categories } from "./Categories/Categories"
import { Header } from "./Header/Header"

export const App = () => {
  return (
    <>
      <Header />
      <Categories />
      <AnimeCards />
    </>
  )
}
