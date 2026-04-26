import { LETTERS } from '../../data/letters'

const base = Math.max(20, LETTERS.length + 4)
const TOTAL = base % 2 === 0 ? base : base + 1

export default function EnvelopeGrid({ goTo }) {
  const envelopes = Array.from({ length: TOTAL }, (_, i) => {
    const letter = LETTERS[i]
    return letter ? { ...letter, locked: false, index: i } : { locked: true, index: i }
  })

  return (
    <>
      <div className="archive-header">
        <button className="btn-back" onClick={() => goTo(12)}>← Back</button>
        <h1>Archives</h1>
      </div>
      <div className="envelope-grid">
        {envelopes.map((env) =>
          env.locked ? (
            <div key={env.index} className="envelope-card locked">
              <div className="envelope-flap" />
              <div className="envelope-body">
                <span className="envelope-emoji">🔒</span>
              </div>
            </div>
          ) : (
            <div
              key={env.index}
              className="envelope-card"
              onClick={() => goTo(15, { letterIndex: env.index })}
            >
              <div className="envelope-flap" />
              <div className="envelope-body">
                <span className="envelope-emoji">✉️</span>
                <span className="envelope-title">{env.title}</span>
                <span className="envelope-date">{env.date}</span>
              </div>
            </div>
          )
        )}
      </div>
    </>
  )
}
