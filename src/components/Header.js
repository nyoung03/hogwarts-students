import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import ost from "../audio/ost.mp3";

const Wrapper = styled.div`
  font-family: "Satisfy", cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const MusicToggle = styled.div``;

const MusicBtn = styled.svg`
  width: 20px;
  padding: 0 10px;
  cursor: pointer;
  transform: translate(-10%, 10%);

  path {
    fill: #373737;
  }
`;

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.8;
  }
`;

const Logo = styled.h2`
  font-size: 40px;
  padding: 0 10px;
  animation: ${fadein} 5s linear 0s infinite alternate;
  -webkit-animation: ${fadein} 5s linear 0s infinite alternate;
  margin-top: 0;
  text-shadow: 2px 4px 10px #ccac00;
  color: #c68a12;
`;

function Header() {
  const [audio] = useState(new Audio(ost));
  const [musicPlay, setMusicPlay] = useState(false);
  const onClickMusicPlay = () => {
    setMusicPlay((prev) => !prev);
    console.log(musicPlay);
  };
  useEffect(() => {
    musicPlay ? audio.play() : audio.pause();
  }, [musicPlay]);
  return (
    <Wrapper>
      <MusicToggle onClick={onClickMusicPlay}>
        {musicPlay === true ? (
          <MusicBtn xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z" />
          </MusicBtn>
        ) : (
          <MusicBtn xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
          </MusicBtn>
        )}
      </MusicToggle>
      <Logo>Hogwarts students</Logo>
    </Wrapper>
  );
}

export default Header;
