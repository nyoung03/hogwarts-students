import styled from "styled-components";
import { AllStudents } from "../api";
import StudentCard from "../components/StudentCard";
import { useQuery } from "react-query";
import { useState } from "react";
import Pagination from "../components/Pagination";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const CardList = styled.div`
  @media (max-width: 1088px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const Loading = styled.div`
  font-size: 30px;
  font-family: "Satisfy", cursive;
  text-align: center;
  padding: 30px 0;
`;

function All() {
  const { isLoading, data } = useQuery("student", AllStudents);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  console.log(window.innerWidth);
  return (
    <Wrapper>
      {isLoading ? (
        <Loading>Aparecium</Loading>
      ) : (
        <CardList>
          {data.slice(offset, offset + limit).map((student, idx) => (
            <StudentCard
              key={idx}
              dateOfBirth={student.dateOfBirth}
              gender={student.gender}
              ancestry={student.ancestry}
              house={student.house}
              image={student.image}
              name={student.name}
            />
          ))}
        </CardList>
      )}
      {isLoading ? (
        ""
      ) : (
        <Pagination
          total={data.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      )}
    </Wrapper>
  );
}

export default All;
