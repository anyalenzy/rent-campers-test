import AppBar from "../../components/AppBar/AppBar";
import Container from "../../components/Container/Container";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <AppBar />
      <main>
        <Container>
          <div>HomePage</div>
        </Container>
      </main>
    </>
  );
};

export default HomePage;
