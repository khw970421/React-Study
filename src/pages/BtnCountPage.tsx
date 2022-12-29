import ReactCounter from "../components/BtnCount/React";
import ReduxCounter from "../components/BtnCount/Redux";
import styled from "styled-components";

export default function BtnCountPage() {
  return (
    <BtnCountPageContainer>
      <ReactCounter />
      <ReduxCounter />
    </BtnCountPageContainer>
  );
}

const BtnCountPageContainer = styled.div`
  display: flex;
`;

export const Container = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin: 30px;
  padding: 30px;
  background-color: skyblue;
`;

export const Title = styled.div`
  padding-bottom: 20px;
`;

export const Btn = styled.button`
  margin: 20px 5px;
`;
