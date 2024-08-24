import { createGlobalStyle } from "styled-components"
const EstilosGlobais = createGlobalStyle`

html {
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%;
  font-family: "Livvic", sans-serif;
  font-weight: 100;
  color: #FFFFFF;
  background: linear-gradient(#000000 35%, #666666 76%);
  background-attachment: fixed;
}
body {
  margin: 0;
  min-height: 100vh;
  overflow-x: hidden;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
ul{
  padding-inline-start: 0;
}
`
export default EstilosGlobais;