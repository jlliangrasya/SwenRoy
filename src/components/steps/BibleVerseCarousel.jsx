import { useState, useRef, useCallback } from 'react'

const SLIDES = [
  {
    content: (
      <>
        <p>
          Today is your birthday—let&apos;s start it by feeding your soul and your mind.
          No one can take these revelations away from you.
          <br /><br />
          Let us begin your day with the Lord and enjoy the rest of it.
          <br /><br />
          <strong>Happy Birthday, dear!</strong>
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p><strong>James 1:19–20</strong></p>
        <p>
          My dear brothers and sisters, take note of this:
          Everyone should be quick to listen, slow to speak and
          slow to become angry, because human anger does not produce
          the righteousness that God desires.
        </p>
        <i><br /><br />
          It is okay to feel angry or frustrated, but we must not
          allow our anger to lead us into sin. Patience goes a long way.
          When someone or something makes you angry, pause for a moment—count
          from one to five and take a deep breath. Choose your battles wisely.
          Do not let anger push you to speak foul words, words than can hurt
          or act in ways you may later regret. They might be so irritating,
          but don&apos;t let it get into your head for a long time.
        </i>
      </>
    ),
  },
  {
    content: (
      <>
        <p><strong>Colossians 3:23</strong></p>
        <p>
          Whatever you do, work at it with all your heart, as working for the Lord, not for human masters,
        </p>
        <i><br /><br />
          This verse has carried me through a long journey.
          Do not focus on who is demanding the work, who gave the instruction, or who will benefit from it.
          Instead, see everything you do as something done for YOURSELF and for the LORD. In all that you do,
          avoid mediocrity. When we do things half-heartedly, we are not only sabotaging the work or the person
          we serve—we are also sabotaging ourselves. Even when the return or reward seems small, giving your
          best out of love and obedience to the Lord goes a long way. Don&apos;t think about other things and other people,
          think about what you can learn and experience.
          Always remember that when you work for the Lord, nothing you do will ever be in vain.
          Trust in God&apos;s gifts and promises rather than your own doubts or thoughts that say, &quot;wala man koy makuha ani&quot;.
          Let your actions be guided by wisdom and conviction, not by fleeting feelings or baseless expectations.
        </i>
      </>
    ),
  },
  {
    content: (
      <>
        <p><strong>Matthew 6:34</strong></p>
        <p>
          Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.
        </p>
        <i><br /><br />
          Good dreams come from the Lord. Let them inspire you, not consume you.
          Offer your dreams and plans to the Lord, and He will establish them in His time.
          Learn to enjoy and be present in today, so you do not miss it. Live each day with
          thanksgiving, gratitude, and love. Allow the future to unfold on its own. It is good to have plans and a direction you want to take, but loosen your grip and let the Lord work through them.
          Pray over your plans instead of relying only on &quot;manifesting.&quot; Wherever you are today,
          its beauty, and do not always fix your eyes on where you want to be tomorrow.
          You will never fully see the goodness of what you already have if you are constantly
          longing for something the Lord has not yet given.
        </i>
      </>
    ),
  },
  {
    content: (goTo) => (
      <>
        <p><strong>Proverbs 3:5–6</strong></p>
        <p>
          Trust in the Lord with all your heart and lean not on your own understanding;
          in all your ways submit to him, and he will make your paths straight.
        </p>
        <i><br /><br />
          Life can be hard and rough at times. There are moments when we do not understand
          why things are happening or why the journey feels so difficult. In those moments,
          remember that nothing truly belongs to us in this world—everything comes from the Lord.
          He gives, and He may also take away. Don&apos;t look at anyone or at the situation,
          look at your mighty and loving God. Our role is to faithfully steward what He has
          entrusted to us, even the hardest things. Trust that everything is happening for good,
          even when it does not make sense. Offer everything to Him—your sadness and your happiness
          alike. Trust in the Lord not only in words, but in truth: in your thoughts, your choices, and your actions.
        </i>
        <br /><br />
        <button className="btn" onClick={() => goTo(9)}>Continue</button>
      </>
    ),
  },
]

export default function BibleVerseCarousel({ goTo }) {
  const [index, setIndex] = useState(0)
  const startXRef = useRef(0)
  const isDraggingRef = useRef(false)

  const startSwipe = useCallback((e) => {
    isDraggingRef.current = true
    startXRef.current = e.touches ? e.touches[0].clientX : e.clientX
  }, [])

  const endSwipe = useCallback((e) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
    const diff = endX - startXRef.current
    if (diff > 50) setIndex(i => Math.max(0, i - 1))
    if (diff < -50) setIndex(i => Math.min(SLIDES.length - 1, i + 1))
  }, [])

  return (
    <>
      <h1>Happy Birthday 💗</h1>
      <div
        className="swipe-container"
        onTouchStart={startSwipe}
        onTouchEnd={endSwipe}
        onMouseDown={startSwipe}
        onMouseUp={endSwipe}
        onMouseLeave={endSwipe}
      >
        <div
          className="swipe-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((slide, i) => (
            <div className="card-slide" key={i}>
              {typeof slide.content === 'function' ? slide.content(goTo) : slide.content}
            </div>
          ))}
        </div>
      </div>
      <div className="dots">
        {SLIDES.map((_, i) => (
          <div
            key={i}
            className={`dot${i === index ? ' active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </>
  )
}
