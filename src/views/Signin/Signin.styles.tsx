import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > div {
    margin-bottom: 35px;
  }
  & > p {
    margin-bottom: 20px;
  }
  & > button {
    margin-top: 20px;
  }
`;
