import styled from "styled-components";

const Box = styled.div`
  width: 500px;
  padding-top: 12px;
  padding-bottom: 30px;

  background-color: #ffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.05);

  margin: 4rem auto;
  text-align: center;

  border-radius: 12px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export { Box, Form};