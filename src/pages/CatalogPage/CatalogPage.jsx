import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectCampers } from "../../redux/camper/selectors";
import { fetchCampers } from "../../redux/camper/operations";
import AppBar from "../../components/AppBar/AppBar";
import CampersList from "../../components/CampersList/CampersList";
import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle";
import FilterBar from "../../components/FilterBar/FilterBar";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    if (campers.length === 0) dispatch(fetchCampers());
  }, [dispatch, campers]);

  return (
    <>
      <DocumentTitle>Catalog - CamperRent</DocumentTitle>
      <AppBar isCatalog={true} />
      <section>
        <Container>
          <div className={css.catalogWrap}>
            <FilterBar />
            <CampersList />
          </div>
        </Container>
      </section>
    </>
  );
};

export default CatalogPage;
