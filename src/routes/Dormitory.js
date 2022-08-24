import styled from "styled-components";

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
  },
  {
    name: "Ravenclaw",
    ideology: "I will teach only the smartest kids.",
    color: "#203A5E",
  },
  {
    name: "Hufflepuff",
    ideology: "I will teach all children without discrimination.",
    color: "#cccc00",
  },
  {
    name: "Slytherin",
    ideology: "I will teach only children of the purest bloodlines.",
    color: "#006600",
  },
];

function Dormitory() {
  return (
    <>
      <DormitoryCardList>
        {dormitoryInfo.map((i, idx) => (
          <DormitoryCard key={idx} color={i.color}>
            <div>{i.name}</div>
            <div>{i.ideology}</div>
          </DormitoryCard>
        ))}
      </DormitoryCardList>
    </>
  );
}

export default Dormitory;
