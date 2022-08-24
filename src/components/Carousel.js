import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Container = styled.div`
  position: relative;
  width: 50%;
  margin: auto;
`;

const CarouselList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  overflow: hidden;
`;

const CarouselItem = styled.li`
  flex: 1 0 100%;
  transform: translateX(-${({ activeIndex }) => activeIndex * 100}%);
  transition: 300ms ease-in-out;

  img {
    width: 100%;
    height: 450px;
  }
`;

const banners = [
  "https://cdn.pixabay.com/photo/2016/09/02/22/59/harry-potter-1640525_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/03/24/19/50/hogwarts-2172050_960_720.jpg",
  "https://cdn.pixabay.com/photo/2020/04/22/15/08/harry-5078582_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/05/18/18/20/bridge-7205882_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/02/03/01/12/castle-1176423_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/10/08/09/50/bridge-3732423_960_720.jpg",
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFocuse, setIsFocuse] = useState(false);
  const nextPage = () => {
    setActiveIndex((prev) => (prev + 1) % banners.length);
  };
  useEffect(() => {
    let timer;
    if (!isFocuse) {
      timer = setInterval(nextPage, 3000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isFocuse]);
  return (
    <Wrapper>
      <Container
        onMouseEnter={() => setIsFocuse(true)}
        onMouseLeave={() => setIsFocuse(false)}
      >
        <CarouselList>
          {banners.map((banner, idx) => (
            <CarouselItem key={idx} activeIndex={activeIndex}>
              <img src={banner} />
            </CarouselItem>
          ))}
        </CarouselList>
      </Container>
    </Wrapper>
  );
}

export default Carousel;
