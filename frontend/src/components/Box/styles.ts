import styled from "styled-components";
import { ButtonBase } from "../../styles/base";
const Box = styled.div`
  width: 500px;
  padding-top: 12px;
  padding-bottom: 30px;

  background-color: #ffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.05);

  margin: 4rem auto;

  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Form = styled.form`
  margin-top: 4px;
  margin-bottom: 8px;

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px
`;

const Button = styled(ButtonBase)``
export { Box, Form, Button};
