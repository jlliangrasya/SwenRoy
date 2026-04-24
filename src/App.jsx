import { useState } from 'react'
import Card from './components/Card'
import Step0 from './components/steps/Step0'
import Step1 from './components/steps/Step1'
import Step2 from './components/steps/Step2'
import Step3 from './components/steps/Step3'
import Step4 from './components/steps/Step4'
import Step5 from './components/steps/Step5'
import Step6 from './components/steps/Step6'
import Step7 from './components/steps/Step7'
import Step8 from './components/steps/Step8'
import Step9 from './components/steps/Step9'
import Step10 from './components/steps/Step10'
import Step11 from './components/steps/Step11'

const STEPS = [Step0, Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9, Step10, Step11]

export default function App() {
  const [step, setStep] = useState(0)

  const StepComponent = STEPS[step]

  return (
    <Card key={step}>
      <StepComponent goTo={setStep} />
    </Card>
  )
}
