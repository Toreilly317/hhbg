import React, { Fragment } from "react";
import styled from "styled-components";
import PlayPauseButton from "./PlayPauseButton";
import SampleForm from "./SampleForm";

const VideoControlsWrapper = styled.div`
  display: flex;
`;

export default ({ player }) => {
  return (
    <VideoControlsWrapper>
      <Fragment>
        <button onClick={() => player.seek(15)}>FF 15sec</button>
        <button onClick={() => player.play()}>Play</button>
        <button onClick={() => player.pause()}>Pause</button>
        <button onClick={() => player.seek(-15)}>RW 15sec</button>
      </Fragment>

      <SampleForm currentTime={player.videoTimeInSeconds()} />
    </VideoControlsWrapper>
  );
};
