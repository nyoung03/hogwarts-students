import styled from "styled-components";
import { AllStudents } from "../api";
import StudentCard from "../components/StudentCard";
import { useQuery } from "react-query";

const Wrapper = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const Loading = styled.div`
  font-size: 30px;
  font-family: "Satisfy", cursive;
  margin: 0 auto;
`;

function All() {
  const { isLoading, data } = useQuery("student", AllStudents);
  return (
    <Wrapper>
      {isLoading ? (
        <Loading>Aparecium</Loading>
      ) : (
        data.map((student, idx) => (
          <StudentCard
            key={idx}
            dateOfBirth={student.dateOfBirth}
            gender={student.gender}
            ancestry={student.ancestry}
            house={student.house}
            image={student.image}
            name={student.name}
          />
        ))
      )}
    </Wrapper>
  );
}

export default All;
