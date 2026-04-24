export default function PersonalMessage({ goTo }) {
  return (
    <div className="message-box">
      <p>
        I want you to spend December 19 doing something just for yourself—whether that&apos;s with your family,
        friends, or officemates. I want you to put yourself first. I can wait.
      </p>
      <p>
        This is your day, and I don&apos;t want to take that away from you or make it about me.
        I&apos;m always here, and we spend so much time together already. For this day,
        I want it to be you—for you. And please don&apos;t forget to include the Lord in it.
        Celebrate His faithfulness in your life and how He has carried you through everything up to this year.
      </p>
      <p>
        I don&apos;t want the day to feel like it&apos;s just about just us.
        I want you to truly live it. My role is simply to be here—to wait, support, and love you—not to make
        everything revolve around &quot;me and you.&quot; Gather your friends, your officemates, the people who matter to you.
      </p>
      <p>
        It&apos;s not that I don&apos;t want to celebrate with you—I truly do. I&apos;d love that.
        I just believe that some moments deserve time, space, and intention.
        I have ideas and plans too, and I think they&apos;ll be even more meaningful when the time is right and enough.
      </p>
      <button className="btn" onClick={() => goTo(5)}>What are your plans?</button>
    </div>
  )
}
