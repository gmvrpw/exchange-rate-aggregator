import { styled } from "solid-styled-components";

const Container = styled.div`
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 24px;
  min-height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  font-size: 18px;
  color: ${(props) => props.theme?.stockRow.color};
  background: ${(props) => props.theme?.stockRow.background};
  cursor: pointer;
  transition: background-color linear 100ms;
  &:hover {
    background-color: rgba(102, 51, 153, 0.08);
  }

  @media (min-width: 800px) {
    min-height: 48px;
    font-size: 16px;
  }
`;

export default Container;
