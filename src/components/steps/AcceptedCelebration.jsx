import { useEffect } from 'react'
import { fireConfetti } from '../../utils/confetti'

export default function AcceptedCelebration({ goTo }) {
  useEffect(() => {
    fireConfetti()
    const t = setTimeout(() => goTo(3), 2000)
    return () => clearTimeout(t)
  }, [goTo])

  return (
    <>
      <h1>Thank you</h1>
      <p style={{ textAlign: 'center' }}>See you this Saturday ❤️</p>
    </>
  )
}
