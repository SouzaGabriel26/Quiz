import styled from 'styled-components';

export const Box = styled.div`
  max-width: 400px;
  margin: 5rem auto;
  border-radius: 6px;
  padding: 1.6rem 2rem 0;
  background: ${({ theme }) => theme.colors.gray.normal};

  h2 {
    color: white;
    padding: 1rem;
    text-align: center;
  }

  .alternatives {
    padding: 20px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      li {
        background: ${({ theme }) => theme.colors.gray.gray};
        border-radius: 6px;

        transition: background 0.1s ease-in;

        label {
          display: block;
          padding: 10px 20px;
        }

        input {
          margin-right: 10px;
        }
      }

      li:hover {
        background: ${({ theme }) => theme.colors.gray.hover};
        label {
          cursor: pointer;
        }
      }
    }

    button {
      cursor: pointer;
      font-weight: bold;
      margin: 20px auto;
      display: block;
      padding: 10px;
      border-radius: 6px;
      border: none;
      outline: 0;
      background: ${({ theme }) => theme.colors.orange};

      &:hover {
        filter: brightness(1.1);
      }

      &[disabled] {
        cursor: default;
        background: ${({ theme }) => theme.colors.gray.gray} !important;
      }
    }


    span {
      color: white;
      display: flex;
      justify-content: flex-end;
    }
  }
`;
