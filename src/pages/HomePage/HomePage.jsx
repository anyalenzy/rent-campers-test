import AppBar from "../../components/AppBar/AppBar";
import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <AppBar />
      <section className={css.homeSection}>
        <Container>
          <div className={css.homeBg}></div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
