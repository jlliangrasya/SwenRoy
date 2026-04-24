import { LETTERS } from '../../data/letters'

export default function OpenLetter({ goTo, letterIndex = 0 }) {
  const letter = LETTERS[letterIndex]

  if (!letter) {
    return (
      <>
        <p style={{ textAlign: 'center' }}>Letter not found.</p>
        <button className="btn-ghost" onClick={() => goTo(14)}>← Back</button>
      </>
    )
  }

  const hasPhotos = letter.images && letter.images.length > 0

  return (
    <>
      <div className="archive-header">
        <button className="btn-back" onClick={() => goTo(14)}>← Back</button>
        <span className="letter-icon">💌</span>
      </div>

      <h1 className="letter-title">{letter.title}</h1>
      <p className="letter-meta">{letter.date}</p>

      <div className="letter-scroll">
        {letter.content.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {hasPhotos && (
        <div className="letter-photos">
          <div className="letter-photos-rule" />
          {letter.images.map((src, i) => (
            <div key={i} className="letter-polaroid">
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      )}
    </>
  )
}
