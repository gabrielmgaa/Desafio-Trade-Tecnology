
import { Countries } from "../../../components/Countries";
import { League } from "../../../components/League";
import { Season } from "../../../components/Season";
import { Teams } from "../../../components/Teams";

import { useForm } from "../../../hooks/useForm";

import { Actions, StepLayoutContainer } from "./styles";

export function StepLayout() {
  const ListComponents = [<Countries />, <Season />, <League />, <Teams />]
  const { currentStep, currentComponent, changeStep } = useForm(ListComponents)


  return (
    <StepLayoutContainer>
        {currentComponent}
      <Actions>
        <button type="button" disabled={currentStep === 0} onClick={() => changeStep(currentStep - 1)}>Voltar</button>
        <button type="button" disabled={currentStep === ListComponents.length - 1} onClick={() => changeStep(currentStep + 1)}>Avançar</button>
      </Actions>

    </StepLayoutContainer>
  )
}