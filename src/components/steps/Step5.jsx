export default function Step5({ goTo }) {
  return (
    <>
      <p style={{ textAlign: 'center' }}>
        Secret, let&apos;s just let everything flow and enjoy every inch of it.
        Let&apos;s make bawi tomorrow and make everything fun and make the most out of the day,
      </p>
      <button className="btn" onClick={() => goTo(6)}>INSTRUCTIONS</button>
    </>
  )
}
