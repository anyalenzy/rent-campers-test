import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";
import css from "./AppBar.module.css";

const AppBar = ({ isFavorites, isCatalog }) => {
  return (
    <header className={css.headerContainer}>
      <NavLink to="home" className={css.logo}>
        camper<span className={css.accentText}>rent</span>
      </NavLink>
      <nav className={css.navigation}>
        <NavLink
          to="/catalog"
          className={`${css.catalog} ${isCatalog ? css.catalogActive : ""}`}
        >
          catalog
        </NavLink>
        <NavLink to="/favorites" className={css.favorites}>
          <Icon
            iconName="favorite"
            width="18"
            height="18"
            styles={isFavorites ? css.heartActive : css.heartNotActive}
          />
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
