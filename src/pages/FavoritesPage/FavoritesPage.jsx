import AppBar from "../../components/AppBar/AppBar";
import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/camper/selectors";
import CamperListItem from "../../components/CamperListItem/CamperListItem";
import Loader from "../../components/Loader/Loader";

import css from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favoritesCampers = useSelector(selectFavorites);
  console.log(favoritesCampers);
  return (
    <>
      <DocumentTitle>Favorites - CamperRent</DocumentTitle>
      <AppBar isFavorites={true} />
      <section>
        <Container>
          <h2 className={css.favTitle}>Your favorites campers</h2>
          {favoritesCampers.length > 0 ? (
            <ul className={css.favList}>
              {favoritesCampers.map((camper) => (
                <CamperListItem camper={camper} key={camper._id} />
              ))}
            </ul>
          ) : (
            <div className={css.favEmpty}>
              <p>
                The list of favorite campers is currently empty, please return
                to the catalog and add the campers you like.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default FavoritesPage;
