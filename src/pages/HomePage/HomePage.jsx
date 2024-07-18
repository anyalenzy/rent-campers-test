import { NavLink } from "react-router-dom";
import AboutUs from "../../components/AboutUs/AboutUs";
import AppBar from "../../components/AppBar/AppBar";
import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home - CamperRent</DocumentTitle>
      <AppBar />
      <section className={css.homeSection}>
        <Container>
          <div className={css.homeBg}>
            <AboutUs />
            <NavLink to="/catalog" className={css.linkToCatalog}>
              Do you want to rent?
            </NavLink>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
