import { Link, useMatch, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Carousel from "../components/Carousel";
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
  const dormitoryMatch = useMatch("/dormitory");
  const mainMatch = useMatch("/");
  return (
    <>
      <Header />

      <Tabs>
        <Tab isActive={allMatch !== null}>
          <Link to="all">All</Link>
        </Tab>
        <Tab isActive={dormitoryMatch !== null}>
          <Link to="dormitory">Dormitory</Link>
        </Tab>
      </Tabs>

      <Routes>
        <Route path="all" element={<All />} />
        <Route path="dormitory/*" element={<Dormitory />} />
      </Routes>

      {mainMatch ? <Carousel /> : null}
    </>
  );
}

export default Main;
