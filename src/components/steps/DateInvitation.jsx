export default function DateInvitation({ goTo }) {
  return (
    <>
      <h1>Can you be my date?</h1>
      <p>Can you be my date this December 20, Saturday at 1:00 PM to 12 midnight?</p>
      <div className="btn-row">
        <button className="btn alt1" onClick={() => goTo(2)}>YES</button>
        <button className="btn alt2" onClick={() => goTo(2)}>YEAH SURE</button>
      </div>
    </>
  )
}
