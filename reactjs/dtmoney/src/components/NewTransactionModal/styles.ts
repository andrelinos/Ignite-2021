import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.313rem;

    border: 1px solid var(--boder-input-d7);
    background: var(--input-bg);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: var(--white);
    border-radius: 0.313rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  button {
    height: 4rem;
    border: 0.15rem solid var(--border-d7);
    border-radius: 0.313rem;

    background: transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 1.25rem;
      height: 1.25rem;
      transform: rotate(180deg);
      margin-right: 0.313rem;
    }

    span {
      display: inline-block;
      font-size: 1rem;
      color: var(--text-title);
    }

    &:hover {
      filter: brightness(1);
      border-color: ${darken(0.1, '#d7d7d7')};
    }
  }
`;
