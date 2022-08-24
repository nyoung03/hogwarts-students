import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const Button = styled.button`
  padding: 7px 6px;
  margin: 0 2px;
  border-radius: 10px;
  font-size: 15px;
  background-color: ${(props) => props.currentPage};

  &:hover {
    background-color: #c68a12;
  }
`;

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              currentPage={page === i + 1 ? "#c68a12" : "gray"}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

export default Pagination;
