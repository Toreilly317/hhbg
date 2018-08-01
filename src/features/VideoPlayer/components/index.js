import styled from "styled-components";

export const VideoPlayerButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  align-content: flex-start;
  padding: 10px;
`;

export const VideoPlayerContainer = styled.div`
  background-color: orange;
  border: 2px solid black;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;

  border-radius: 0px 2px 2px 0px;
  display: grid;
  grid-template-columns: 2fr, 1fr;
  transition: all 1s ease-in-out;
`;
