import { useState } from 'react'
import Card from './components/Card'
import NameEntry from './components/steps/NameEntry'
import DateInvitation from './components/steps/DateInvitation'
import AcceptedCelebration from './components/steps/AcceptedCelebration'
import DateClarification from './components/steps/DateClarification'
import PersonalMessage from './components/steps/PersonalMessage'
import SecretPlansTeaser from './components/steps/SecretPlansTeaser'
import EventInstructions from './components/steps/EventInstructions'
import PasswordGate from './components/steps/PasswordGate'
import BibleVerseCarousel from './components/steps/BibleVerseCarousel'
import ChallengeChecklist from './components/steps/ChallengeChecklist'
import PinEntry from './components/steps/PinEntry'
import FinalBirthdayLetter from './components/steps/FinalBirthdayLetter'
import WelcomeChoice from './components/steps/WelcomeChoice'
import ArchivePinEntry from './components/steps/ArchivePinEntry'
import EnvelopeGrid from './components/steps/EnvelopeGrid'
import OpenLetter from './components/steps/OpenLetter'

// Indices 0–11: main flow  |  12–15: archive flow
const STEPS = [
  NameEntry,           // 0
  DateInvitation,      // 1
  AcceptedCelebration, // 2
  DateClarification,   // 3
  PersonalMessage,     // 4
  SecretPlansTeaser,   // 5
  EventInstructions,   // 6
  PasswordGate,        // 7
  BibleVerseCarousel,  // 8
  ChallengeChecklist,  // 9
  PinEntry,            // 10
  FinalBirthdayLetter, // 11
  WelcomeChoice,       // 12
  ArchivePinEntry,     // 13
  EnvelopeGrid,        // 14
  OpenLetter,          // 15
]

export default function App() {
  const [step, setStep] = useState(0)
  const [ctx, setCtx] = useState({})

  function goTo(newStep, newCtx = {}) {
    setStep(newStep)
    setCtx(newCtx)
  }

  const StepComponent = STEPS[step]

  return (
    <Card key={step} fullscreen={step === 14} wide={step === 15}>
      <StepComponent goTo={goTo} {...ctx} />
    </Card>
  )
}
