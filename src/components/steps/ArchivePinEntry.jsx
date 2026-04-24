import { useRef, useState } from 'react'

// ── Change this to your desired archive PIN ──────────────────────
const ARCHIVE_PIN = '1219'
// ─────────────────────────────────────────────────────────────────

export default function ArchivePinEntry({ goTo }) {
  const [digits, setDigits] = useState(['', '', '', ''])
  const refs = [useRef(), useRef(), useRef(), useRef()]

  function handleChange(i, value) {
    const digit = value.replace(/\D/g, '').slice(-1)
    const next = digits.map((d, idx) => (idx === i ? digit : d))
    setDigits(next)

    if (digit && i < 3) refs[i + 1].current.focus()

    if (i === 3 && digit) {
      const pin = next.join('')
      if (pin === ARCHIVE_PIN) {
        goTo(14)
      } else {
        setDigits(['', '', '', ''])
        refs[0].current.focus()
        alert('Incorrect PIN 💌')
      }
    }
  }

  return (
    <>
      <h1>Archives</h1>
      <p style={{ textAlign: 'center' }}>
        Enter the PIN to unlock the archive.
      </p>
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
