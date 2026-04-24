import { useRef, useState } from 'react'
import { fireConfetti } from '../../utils/confetti'

export default function Step10({ goTo }) {
  const [digits, setDigits] = useState(['', '', '', ''])
  const refs = [useRef(), useRef(), useRef(), useRef()]

  function handleChange(i, value) {
    const digit = value.slice(-1)
    const next = digits.map((d, idx) => idx === i ? digit : d)
    setDigits(next)

    if (digit && i < 3) {
      refs[i + 1].current.focus()
    }

    if (i === 3 && digit) {
      const pin = next.join('')
      if (pin === '1219') {
        fireConfetti()
        goTo(11)
      }
    }
  }

  return (
    <>
      <h1>Final Step</h1>
      <p>Enter 4-digit PIN</p>
      <div className="pin">
        {digits.map((d, i) => (
          <input
            key={i}
            ref={refs[i]}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={d}
            onChange={e => handleChange(i, e.target.value)}
          />
        ))}
      </div>
    </>
  )
}
