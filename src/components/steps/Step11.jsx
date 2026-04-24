import { useEffect } from 'react'
import { fireConfetti } from '../../utils/confetti'

export default function Step11() {
  useEffect(() => {
    fireConfetti()
  }, [])

  return (
    <>
      <h1>Happy Birthday 🎂</h1>
      <div className="message-box">
        <p>
          Hello, Boky! I hope you enjoyed your day from December 19 until December 20.
          Today may no longer be your birthday, but I see it as an extension of it.
          <br /><br />
          This year has truly been a roller coaster for us. Imagine—we started the year on not-so-good terms.
          We had a very intense early 2025. We got separated, we applied jobs together, graduated, finished college
          strong, went through a season of no communication, you even met my family, and now we are both employees navigating life together.
          <br />
          It&apos;s honestly kind of funny (and a little cringe) that we found our way back to each other simply
          because we met in the elevator. Yet here we are, ending the year with the same person — but as very different
          versions of ourselves. I love how we grew, even while we were apart. I truly believe that being in a healthy
          relationship means allowing each other to have individual lives, while still feeling safe and content
          knowing you are always there for one another.
          <br />
          Let me just take this moment to be grateful for you and our lives — for what we achieved, what we have conquered,
          what we gained, what we learned, and how much we developed this year.
          <br />
          It&apos;s also really beautiful to witness your growth. You are not the same person I knew two years ago (well,
          maybe a part of it—haha, not entirely), and that&apos;s still a good thing. Thank you for opening your
          life to me again and allowing me to be part of it. I thank God for your life—for always being there and
          for being just one call away. Do you know how much It means so much to me that I can now pray with you,
          do life with you, and walk alongside you.
          <br />
          I&apos;ve prayed about this a lot, and it feels like the Lord wants me to stay in your life for a greater purpose—
          one I may not fully understand yet. Haha, this letter already sounds more like a love letter than a birthday
          letter, but honestly, there&apos;s no more perfect time to say these things.
          <br />
          Thank you for today, for spending it with me. I wanted to give you something that no one can ever take away,
          and this is it, a little adventure.
          <br />
          I pray that God continues to encounter you, mold you, and shape you into the person He has called you to be.
          I pray that you find your purpose in Him alone, not in anyone else.
          I pray for your family—that God heals every broken heart and restores what needs healing.
          I pray for your career and of course, your daily life.
          <br />
          I am here for you, and I always will be.
          <br />
          Happy Birthday, Boky 💗
        </p>
      </div>
    </>
  )
}
