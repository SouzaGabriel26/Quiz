import styled from 'styled-components';

export const Container = styled.header`
  text-align: center;
  background: ${({ theme }) => theme.colors.gray.normal};
  color: white;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: ${({ showResult }) => (showResult ? 'space-around' : 'center')};

  button {
    padding: 10px;
    border-radius: 6px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.1s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.orange};
    }
  }
`;
