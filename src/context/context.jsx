import { createContext, useState } from "react"

const CartContext = createContext({
  isOpen: false,
})

export const CartContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const context = { isOpen, setIsOpen }

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}

export default CartContext