import AppBar from "../../components/AppBar/AppBar";
import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  return (
    <>
      <DocumentTitle>Favorites - CamperRent</DocumentTitle>
      <AppBar isFavorites={true} />
      <section>
        <Container></Container>
      </section>
    </>
  );
};

export default FavoritesPage;
