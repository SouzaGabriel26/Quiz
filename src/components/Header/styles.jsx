import styled from 'styled-components';

export const Container = styled.header`
  text-align: center;
  background: ${({ theme }) => theme.colors.gray.normal};
  color: white;
  padding: 2rem;
`;
