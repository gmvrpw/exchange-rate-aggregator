import { styled } from "solid-styled-components";
import { useThemeContext } from "../../../../contexts/theme";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${() => useThemeContext()[0].theme.page.background};
  overflow-y: auto;
`;

export default Container;
