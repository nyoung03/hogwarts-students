import styled from "styled-components";

const Wrapper = styled.div`
  background-color: red;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  width: 40%;
  margin: auto;
`;

function DetailModal(props) {
  const { open, close } = props;
  return (
    <>
      {open ? (
        <Wrapper>
          <button onClick={close}>x</button>
        </Wrapper>
      ) : null}
    </>
  );
}

export default DetailModal;
