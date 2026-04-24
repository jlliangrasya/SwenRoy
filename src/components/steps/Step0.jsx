import { useState } from 'react'
import { fireConfetti } from '../../utils/confetti'

export default function Step0({ goTo }) {
  const [name, setName] = useState('')

  function handleContinue() {
    if (name.trim().toLowerCase() === 'boky') {
      fireConfetti()
      goTo(1)
    } else {
      alert('Try again 💗')
    }
  }

  return (
    <>
      <h1>Hello!</h1>
      <p>
        God loves you and I do, too.
        <br /><br />
        Please enter your name if you want some surprises.
      </p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleContinue()}
      />
      <button className="btn" onClick={handleContinue}>Continue</button>
    </>
  )
}
