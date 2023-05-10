import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  width: 100%;
  bottom: 0;

  text-align: center;
  background: ${({ theme }) => theme.colors.gray.normal};
  color: white;
  padding: 1.6rem 2rem;

  a {
    text-decoration: none;
    color: white;
    transition: color 0.2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;
