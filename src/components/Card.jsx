import { useState, useEffect } from 'react'

export default function Card({ children }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 20)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`card${show ? ' show' : ''}`}>
      {children}
    </div>
  )
}
