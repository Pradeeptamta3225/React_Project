import { createReducer, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: {id:1,name: 'Pradeep'}
}

export const todoStore = createReducer({
    id: 'todo',
    initialState,
    reducer:{
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todo = state.todo.filter((todo) => todo.id !== action.payload)
        }
    }
})


























// import {createSlice, nanoid} from '@reduxjs/toolkit'

// const initialState = {
//     todos: [{id: 1, name: "Pradeep"}]
// }


// export const todoSlice = createSlice({
//     name: 'todo',
//     initialState,
//     reducers: {
//       addTodo: (state, action) => {
//         const todo = {
//             id: nanoid(),
//             text: action.payload
//         }
//             state.todos.push(todo)
//       },
     
//      removeTodo: (state, action) => {
//         state.todos = state.todos.filter((todo) => todo.id !==action.payload)
//      }

//     }
// })