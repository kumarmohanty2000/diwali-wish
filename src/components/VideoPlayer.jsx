import styled from 'styled-components';

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const StyledVideo = styled.video`
  width: 80%;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 0 10px #fffb00;
`;

const VideoPlayer = ({ src, onClose }) => (
  <VideoContainer onClick={onClose}>
    <StyledVideo  autoPlay loop>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </StyledVideo>
    <h1>thank you</h1>
  </VideoContainer>
);

export default VideoPlayer;
