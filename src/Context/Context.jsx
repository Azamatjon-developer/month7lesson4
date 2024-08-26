import { createContext, useEffect, useReducer, useState } from 'react'
import { useAxios } from '../hook/useAxios'

export const Context = createContext()

const ACTIONS = {
  ADD_PRODUCT: 'ADD_PRODUCT',
}

export const ContextCounter = ({ children }) => {
  const [prods, setProds] = useState([])
  const [savedProds, setSavedprods] = useState([])

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.ADD_PRODUCT:
        const item = prods.find((item) => item.id === action.payload)
        if (item && !state.some((prod) => prod.id === item.id)) {
          return [...state, item]
        }
        return state
      default:
        return state
    }
  }

  const [counter, dispatch] = useReducer(reducer, savedProds)

  useEffect(() => {
    useAxios()
      .get('/products')
      .then((res) => setProds(res.data))
  }, [])

  return (
    <Context.Provider value={{ savedProds: counter, dispatch, ACTIONS }}>
      {children}
    </Context.Provider>
  )
}
