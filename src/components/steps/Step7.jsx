import { useState } from 'react'

export default function Step7({ goTo }) {
  const [secret, setSecret] = useState('')

  function handleProceed() {
    if (secret.trim().toLowerCase() === 'isaiah 9:6') {
      goTo(8)
    } else {
      alert('Not yet 💌')
    }
  }

  return (
    <>
      <h1>One more step</h1>
      <p>
        Please input the right credentials so you can proceed.<br />
        <em>Hint: The word you have received last December 18, 2025</em>.
        <br /><br />
      </p>
      <input
        type="password"
        placeholder="Enter password"
        value={secret}
        onChange={e => setSecret(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleProceed()}
      />
      <button className="btn" onClick={handleProceed}>Proceed</button>
    </>
  )
}
