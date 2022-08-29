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
  width: 30px;
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
    musicPlay ? audio.pause() : audio.play();
  }, [musicPlay]);

  useEffect(() => {
    audio.addEventListener("ended", () => setMusicPlay(false));
    return () => {
      audio.removeEventListener("ended", () => setMusicPlay(false));
    };
  }, []);
  return (
    <Wrapper>
      <MusicToggle onClick={onClickMusicPlay}>
        {musicPlay === true ? (
          <MusicBtn xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M301.2 34.85c-11.5-5.188-25.02-3.122-34.44 5.253L131.8 160H48c-26.51 0-48 21.49-48 47.1v95.1c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9c5.984 5.312 13.58 8.094 21.26 8.094c4.438 0 8.972-.9375 13.17-2.844c11.5-5.156 18.82-16.56 18.82-29.16V64C319.1 51.41 312.7 40 301.2 34.85zM513.9 255.1l47.03-47.03c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L480 222.1L432.1 175c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l47.03 47.03l-47.03 47.03c-9.375 9.375-9.375 24.56 0 33.94c9.373 9.373 24.56 9.381 33.94 0L480 289.9l47.03 47.03c9.373 9.373 24.56 9.381 33.94 0c9.375-9.375 9.375-24.56 0-33.94L513.9 255.1z" />
          </MusicBtn>
        ) : (
          <MusicBtn xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M412.6 182c-10.28-8.334-25.41-6.867-33.75 3.402c-8.406 10.24-6.906 25.35 3.375 33.74C393.5 228.4 400 241.8 400 255.1c0 14.17-6.5 27.59-17.81 36.83c-10.28 8.396-11.78 23.5-3.375 33.74c4.719 5.806 11.62 8.802 18.56 8.802c5.344 0 10.75-1.779 15.19-5.399C435.1 311.5 448 284.6 448 255.1S435.1 200.4 412.6 182zM473.1 108.2c-10.22-8.334-25.34-6.898-33.78 3.34c-8.406 10.24-6.906 25.35 3.344 33.74C476.6 172.1 496 213.3 496 255.1s-19.44 82.1-53.31 110.7c-10.25 8.396-11.75 23.5-3.344 33.74c4.75 5.775 11.62 8.771 18.56 8.771c5.375 0 10.75-1.779 15.22-5.431C518.2 366.9 544 313 544 255.1S518.2 145 473.1 108.2zM534.4 33.4c-10.22-8.334-25.34-6.867-33.78 3.34c-8.406 10.24-6.906 25.35 3.344 33.74C559.9 116.3 592 183.9 592 255.1s-32.09 139.7-88.06 185.5c-10.25 8.396-11.75 23.5-3.344 33.74C505.3 481 512.2 484 519.2 484c5.375 0 10.75-1.779 15.22-5.431C601.5 423.6 640 342.5 640 255.1S601.5 88.34 534.4 33.4zM301.2 34.98c-11.5-5.181-25.01-3.076-34.43 5.29L131.8 160.1H48c-26.51 0-48 21.48-48 47.96v95.92c0 26.48 21.49 47.96 48 47.96h83.84l134.9 119.8C272.7 477 280.3 479.8 288 479.8c4.438 0 8.959-.9314 13.16-2.835C312.7 471.8 320 460.4 320 447.9V64.12C320 51.55 312.7 40.13 301.2 34.98z" />
          </MusicBtn>
        )}
      </MusicToggle>
      <Logo>Hogwarts students</Logo>
    </Wrapper>
  );
}

export default Header;
