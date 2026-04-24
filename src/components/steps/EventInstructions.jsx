export default function EventInstructions({ goTo }) {
  return (
    <>
      <h1>Instructions</h1>
      <p><strong>Date:</strong> December 20, 2025</p>
      <p><strong>Call time:</strong> 1:00 PM <i>(Please make sure to arrive on time)</i></p>
      <p><strong>Meeting Place:</strong> MyBus SM City Cebu, North Reclamation Area, Cebu City.</p>
      <p><strong>Route:</strong> Itinerary will be sent to you via email</p>
      <p><strong>Dress Code:</strong> Chill &amp; Comfortable clothes, white shoes</p>
      <p><strong>Spare Clothes:</strong> Bring Casual (a bit formal) top</p>
      <i> You can just put the shirt/polo in a plastic and put it in my bag haha</i>
      <p><strong>What to bring:</strong> Personal things and a Cap</p>
      <p><strong>What to prepare:</strong> Yourself, Your body</p>
      <i>Note: No to KJ, No to Sapot, No to loud-loud para No Uli</i>
      <button className="btn" onClick={() => goTo(7)}>Next</button>
    </>
  )
}
