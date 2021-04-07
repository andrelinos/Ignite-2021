import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
     --background: #f0f2f5;
     --red: #e52e4d;
     --blue: #5429cc;
     --blue-light: #6933ff;
     --green: #33CC95;
     --white: #ffffff;
     --text-title: #363f5f;
     --text-body: #969cb3;
     --shape: #ffffff;
     --input-bg: #e7e9ee;
     --border-d7: #d7d7d7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline-color: rgba(50, 115, 220, 0.3);
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }

  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.95);
    }
  }

  ul {
    list-style: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

/*
* Estilo para o Modal
*/

.react-modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.react-modal-content {
  width: 100%;
  max-width: 576px;
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: 0.313rem
}

.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
}

`;
