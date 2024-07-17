import AppBar from "../../components/AppBar/AppBar";
import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <>
      <DocumentTitle>Catalog</DocumentTitle>
      <AppBar isCatalog={true} />
      <section>
        <Container></Container>
      </section>
    </>
  );
};

export default CatalogPage;
