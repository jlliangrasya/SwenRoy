export default function DateClarification({ goTo }) {
  return (
    <>
      <p style={{ textAlign: 'center', fontWeight: 600, color: 'var(--accent)' }}>
        Boky be like:<br />
        &quot;Okay raman ug December 19, bok&quot;
      </p>
      <button className="btn" onClick={() => goTo(4)}>BUT! BUT! BUT!</button>
    </>
  )
}
