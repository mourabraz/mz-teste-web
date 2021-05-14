import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

*:focus {
    outline: 0;
  }

html {
  font-size: 62.5%; /* 10px */
}

body {
  background: #dedede;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, input, button, textarea {
  font: 1.4rem 'Roboto', sans-serif;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}

ul {
  list-style: none
}

`;
