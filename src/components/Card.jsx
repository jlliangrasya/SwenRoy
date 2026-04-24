import { useState, useEffect } from 'react'

export default function Card({ children, fullscreen = false, wide = false }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 20)
    return () => clearTimeout(t)
  }, [])

  const classes = ['card', fullscreen && 'card--full', wide && 'card--wide', show && 'show']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
