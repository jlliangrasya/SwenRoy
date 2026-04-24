export default function WelcomeChoice({ goTo }) {
  return (
    <>
      <h1>Oh, hi!</h1>
      <p style={{ textAlign: 'center' }}>
        Wow, it&apos;s really nice to see you here.
        <br />
        I really didn&apos;t expect it.
        <br /><br />
        What made you come here?
      </p>
      <button className="btn alt1" onClick={() => goTo(1)}>
        Dec 19, 2025
      </button>
      <button className="btn" style={{ marginTop: 10 }} onClick={() => goTo(13)}>
        Archives
      </button>
    </>
  )
}
