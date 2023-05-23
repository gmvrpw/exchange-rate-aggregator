import { styled } from "solid-styled-components";

const Logo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 40px;
  font-weight: 800;
  text-align: center;

  @media screen and (min-width: 400px) {
    font-size: 56px;
  }

  @media screen and (min-width: 600px) {
    font-size: 76px;
  }
`;

export default Logo;
