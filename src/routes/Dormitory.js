import { Link, Route, Routes, useMatch } from "react-router-dom";
import styled from "styled-components";
import Gryffindor from "./Gryffindor";
import Hufflepuff from "./Hufflepuff";
import Ravenclaw from "./Ravenclaw";
import Slytherin from "./Slytherin";

const DormitoryCardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 30px;
  font-family: "Satisfy", cursive;
  width: 30%;
  margin: 0 auto;
`;

const DormitoryCard = styled.div`
  background-image: radial-gradient(#341d08, ${(props) => props.color}),
    url("https://cdn.pixabay.com/photo/2017/02/02/07/44/paper-2032145_960_720.jpg");
  background-position: center;
  width: 180px;
  height: 230px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }

  div {
    font-size: 20px;
    &:first-child {
      font-weight: bold;
      font-size: 25px;
      padding: 10px 0;
    }

    &:last-child {
      /* background-color: blue; */
      width: 80%;
      text-align: center;
      padding: 5px 0;
    }
  }
`;

const dormitoryInfo = [
  {
    name: "Gryffindor",
    ideology: "I will teach any children who show courage.",
    color: "#a51b0b",
    link: "gryffindor",
  },
  {
    name: "Ravenclaw",
    ideology: "I will teach only the smartest kids.",
    color: "#203A5E",
    link: "ravenclaw",
  },
  {
    name: "Hufflepuff",
    ideology: "I will teach all children without discrimination.",
    color: "#cccc00",
    link: "hufflepuff",
  },
  {
    name: "Slytherin",
    ideology: "I will teach only children of the purest bloodlines.",
    color: "#006600",
    link: "slytherin",
  },
];

function Dormitory() {
  const dormitoryMatch = useMatch("/dormitory");
  return (
    <>
      {dormitoryMatch ? (
        <DormitoryCardList>
          {dormitoryInfo.map((i, idx) => (
            <Link to={i.link} key={idx}>
              <DormitoryCard color={i.color}>
                <div>{i.name}</div>
                <div>{i.ideology}</div>
              </DormitoryCard>
            </Link>
          ))}
        </DormitoryCardList>
      ) : null}

      <Routes>
        <Route path="gryffindor" element={<Gryffindor />} />
        <Route path="ravenclaw" element={<Ravenclaw />} />
        <Route path="hufflepuff" element={<Hufflepuff />} />
        <Route path="slytherin" element={<Slytherin />} />
      </Routes>
    </>
  );
}

export default Dormitory;
