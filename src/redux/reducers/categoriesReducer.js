import { createSlice } from "@reduxjs/toolkit"

const todosSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "Боевик", selected: false },
    { id: 2, title: "Комедия", selected: false },
    { id: 3, title: "Драма", selected: false },
    { id: 4, title: "Фэнтези", selected: false },
    { id: 5, title: "Мистика", selected: false },
    { id: 6, title: "Детектив", selected: false },
    { id: 7, title: "Триллер", selected: false },
    { id: 8, title: "Психология", selected: false },
    { id: 9, title: "Повседневность", selected: false },
    { id: 10, title: "Фантастика", selected: false },
    { id: 11, title: "Романтика", selected: false },
    { id: 12, title: "Приключения", selected: false },
  ],
  reducers: {
    toggleSelected(state, action) {
      state.forEach(e => {
        if (e.id === action.payload) e.selected = !e.selected
      })
    },
  },
})

export const { toggleSelected } = todosSlice.actions

export default todosSlice.reducer
