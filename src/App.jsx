import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contacts from "./components/Contacts";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background: url("./img/bg.jpeg");
  scroll-snap-type: y mandatory;
  scroll-snap-align: center;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  &::webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contacts />
    </Container>
  );
}

export default App;
