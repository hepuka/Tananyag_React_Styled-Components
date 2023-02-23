import {
  ButtonFromComponent,
  StyledButton,
  ButtonLabel,
} from "./Components/Button.styled";
import { AppContainer } from "./Components/Containers.styled";
import { GlobalStyles } from "./GlobalStyles.style";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <StyledButton backgroundColor="purple">
        <ButtonLabel>From StyledButton with buttonlabel</ButtonLabel>
      </StyledButton>

      <StyledButton backgroundColor="red">
        From StyledButton without buttonlabel
      </StyledButton>

      {/*buttonlabel a prop amit átadunk a Button.js-nek*/}
      <ButtonFromComponent
        buttonlabel="From ButtonFromComponent"
        backgroundColor="violet"
      ></ButtonFromComponent>
    </AppContainer>
  );
}

export default App;
