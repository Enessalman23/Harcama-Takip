import { useEffect, useState } from 'react'

// useState gibi çalışır, ama değeri tarayıcıdaki LocalStorage ile senkron tutar.
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved ? JSON.parse(saved) : initialValue
    } catch {
      return initialValue // bozuk veya erişilemeyen depolamada boş başla
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* depolama dolu veya kapalıysa sessizce geç */
    }
  }, [key, value])

  return [value, setValue]
}
