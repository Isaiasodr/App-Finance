import styled from "styled-components";
import { useState } from "react";
import Axios from "axios";

const Wrap = styled.div``;

const Container = styled.div`
  max-width: 900px;
  width: 98%;
  align-items: center;
  justify-content: space-around;
  display: flex;
  margin: 0 auto;
`;

const Frame = styled.div`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  width: 200px;
  height: 100px;
  border-radius: 5px;
  margin-top: 10%;
`;
const TextFrame = styled.p`
  text-align: center;
  padding: 10px;
  color: black;
`;
const RegisterContainer = styled.div`
  max-width: 700px;
  width: 98%;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
`;
const RegisterDiv = styled.div`
  padding-top: 20px;
`;
const RegisterLabel = styled.label`
  padding-left: 5px;
  color: black;
`;
const RegisterInput = styled.input`
  padding: 5px;
  margin-left: 5px;
`;
const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  color: white;
  background-color: #124368;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Dashboard = () => {
  const [values, setValues] = useState();
  const handleChangeValues = (value) => {
    setValues((preValue) => ({
      ...preValue,
      [value.target.name]: value.target.value,
    }));
  };
  const handleClickButton = () => {
    Axios.post("http://localhost:5000/revenues/create", {
      origin: values.origin,
      amount: values.amount,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <Wrap>
      <Container>
        <Frame>
          <TextFrame>Entradas</TextFrame>
          <TextFrame>R$2000</TextFrame>
        </Frame>
        <Frame>
          <TextFrame>Saídas</TextFrame>
          <TextFrame>R$1200</TextFrame>
        </Frame>
        <Frame>
          <TextFrame>Total</TextFrame>
          <TextFrame>$3200</TextFrame>
        </Frame>
      </Container>
      <RegisterContainer>
        <RegisterDiv>
          <RegisterLabel>Entrada:</RegisterLabel>
          <RegisterInput
            type="text"
            name="origin"
            placeholder="descrição"
            onChange={handleChangeValues}
          />
        </RegisterDiv>
        <RegisterDiv>
          <RegisterLabel>Valor:</RegisterLabel>
          <RegisterInput
            type="number"
            name="amount"
            placeholder="valor"
            onChange={handleChangeValues}
          />
        </RegisterDiv>
        <Button primary onClick={() => handleClickButton()}>
          Cadastrar
        </Button>
      </RegisterContainer>
    </Wrap>
  );
};
export default Dashboard;
