import { keyframes, styled } from "solid-styled-components";

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;

const Skeleton = styled.div`
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #fff 18%, #ececec 33%);
  border-radius: 8px;
  background-size: 200% 100%;
  animation: 1.5s ${shine} linear infinite;
  opacity: 0.5;
`;

export default Skeleton;
