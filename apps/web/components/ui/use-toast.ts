// Placeholder for use-toast.ts
// This file should contain the logic for managing toasts
// For now, we'll just export a dummy hook to prevent errors

import { useState } from 'react'

export const useToast = () => {
  const [toasts, setToasts] = useState([])

  const addToast = (toast) => {
    setToasts((prevToasts) => [...prevToasts, toast])
  }

  return { toasts, addToast }
}