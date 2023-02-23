import styled from "styled-components";

/*rect componensként létrehozott button importálása, amit majd ezzel a Button style-al stilizálunk*/

import Button from "./Button";

/*Button komponens létrehozása*/
/*styled. után kell a HTML elem neve amire az adott stílist használni akarjuk*/

/*Ha már korábban elkészítettünk egy elem componenst a reactben akkor a styled.elemnév helyére a styled(importáltkomponens) tesszük , és így ezt a komponenst stílusozzuk*/

export const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};

  /*a gomb hover-jénél a gomb háttere sárga lesz, és ezen belül a label színe kék*/
  &:hover {
    background-color: yellow;
    & label {
      color: blue;
    }
  }

  &:active {
    background-color: coral;
  }
`;

export const ButtonFromComponent = styled(Button)`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};

  /*a gomb hover-jénél a gomb háttere sárga lesz, és ezen belül a label színe kék*/
  &:hover {
    background-color: yellow;
    & label {
      color: blue;
    }
  }

  &:active {
    background-color: coral;
  }
`;

export const ButtonLabel = styled.label`
  font-size: 15px;
  color: white;
`;
