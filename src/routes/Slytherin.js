import { useQuery } from "react-query";
import { useMatch } from "react-router-dom";
import { Dormitory } from "../api";
import StudentCard from "../components/StudentCard";
import {
  CardList,
  DormitoryName,
  DormitoryWrapper,
  Loading,
} from "../style/DormitoryStyle";

function Slytherin() {
  const typeMatch = useMatch("/dormitory/:type");
  const { isLoading, data } = useQuery("type", () =>
    Dormitory(typeMatch.params.type)
  );
  console.log(data);
  return (
    <DormitoryWrapper>
      <DormitoryName color="#006600">Slytherin</DormitoryName>
      {isLoading ? (
        <Loading>Aparecium</Loading>
      ) : (
        <CardList>
          {data.map((student, idx) => (
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
    </DormitoryWrapper>
  );
}

export default Slytherin;
