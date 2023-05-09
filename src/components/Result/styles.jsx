import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
      text-align: center;
    }

    ul {
      background: ${({ theme }) => theme.colors.gray.hover};
      padding: 10px 20px;
      border-radius: 6px;

    }

`;
