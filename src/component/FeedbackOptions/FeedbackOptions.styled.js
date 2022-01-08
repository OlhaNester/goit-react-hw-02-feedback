import styled from 'styled-components';

export const Control = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 70px;
  height: 25px;
  background-color: #d4c2aac7;
  border: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10%;
  &:not(:last-child) {
    margin-right: 10px;
  }
  :hover,
  :focus {
    transform: scale(1.1);
    box-shadow: 0px 5px 10px 2px rgba(10, 18, 24, 0.2);
    background-color: #975908c7;
  }
`;
