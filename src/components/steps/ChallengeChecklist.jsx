import { useState } from 'react'

const TASKS = [
  '2 TikTok videos',
  '5 selfies together',
  'Half-body photo together',
  '5 formal solo photos',
]

export default function ChallengeChecklist({ goTo }) {
  const [checked, setChecked] = useState(TASKS.map(() => false))

  function toggle(i) {
    setChecked(prev => prev.map((v, idx) => idx === i ? !v : v))
  }

  const allDone = checked.every(Boolean)

  return (
    <>
      <p>Please complete these challenges:</p>
      {TASKS.map((task, i) => (
        <div className="checkbox" key={i}>
          <input
            type="checkbox"
            checked={checked[i]}
            onChange={() => toggle(i)}
          />
          {task}
        </div>
      ))}
      <button
        className="btn"
        disabled={!allDone}
        onClick={() => goTo(10)}
      >
        CONTINUE
      </button>
    </>
  )
}
