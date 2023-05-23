import { styled } from "solid-styled-components";

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media screen and (min-width: 600px) {
    text-align: right;
  }
`;

export default Detail;
