import styled from "styled-components";

export const DormitoryWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const DormitoryName = styled.div`
  padding: 30px 0;
  font-family: "Satisfy", cursive;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.color};
`;

export const CardList = styled.div`
  @media (max-width: 1088px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 758px) {
    grid-template-columns: repeat(1, 1fr);
  }
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const Loading = styled.div`
  font-size: 30px;
  font-family: "Satisfy", cursive;
  text-align: center;
  padding: 30px 0;
`;
