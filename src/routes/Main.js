import { Link, useMatch, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import All from "./All";
import Dormitory from "./Dormitory";

const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 40px 30%;
`;

const Tab = styled.div`
  text-align: center;
  padding: 7px;
  color: ${(props) => (props.isActive ? "#c68a12" : "gray")};
`;

function Main() {
  const allMatch = useMatch("/all");
  const dormitory = useMatch("/dormitory");
  return (
    <>
      <Header />

      <Tabs>
        <Tab isActive={allMatch !== null}>
          <Link to="all">All</Link>
        </Tab>
        <Tab isActive={dormitory !== null}>
          <Link to="dormitory">Dormitory</Link>
        </Tab>
      </Tabs>

      <Routes>
        <Route path="all" element={<All />} />
        <Route path="dormitory" element={<Dormitory />} />
      </Routes>
    </>
  );
}

export default Main;