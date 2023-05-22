import { useState, ReactNode, FormEvent } from 'react';


export function useForm(steps: ReactNode[]) {
  const [currentStep, setCurrentStep] = useState(0)

  function changeStep(index:number  ) {

    if (index < 0 || index >= steps.length) {
      return 
    }

    setCurrentStep(index)
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep
  }

}