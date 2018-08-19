import styled from "styled-components";

export const PlayerContainer = styled.div`
  background-color: #2e6195;
  border: 2px solid black;
  box-sizing: border-box;
  position: fixed;

  bottom: 0;
  width: 100vw;

  border-radius: 0px 2px 2px 0px;

  &:hover ~ div {
    bottom: 20px;
  }
`;

export const VideoContainer = styled.div`
  z-index: 1;
  position: fixed;
  bottom: -100%;
  width: 100vw;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background-color: #2e6195;
  padding: 10px;
  box-sizing: border-box;
  transition: all 1s ease-out;
  &:hover {
    bottom: 20px;
  }
`;

export const VideoPlayerButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  align-content: flex-start;
  padding: 10px;
`;

export const SampleFormContainer = styled.div`
  background: red;
  padding: 10px;
  display: grid;
  grid-template-columns: minmax(50px, 100px) 1fr;
  grid-gap: 5px;
  margin-bottom: 10px;
`;

export const SampleformInputGroup = styled.div`
  display: grid;
  & input:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const SampleFormActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
