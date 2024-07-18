import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/camper/slice";
import { selectFavorites } from "../../redux/camper/selectors";
import Icon from "../Icon/Icon";
import css from "./CamperDescription.module.css";

const CamperDescription = ({ camper }) => {
  const { name, price, _id } = camper;
  const favorites = useSelector(selectFavorites);
  console.log(favorites);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(_id));
    } else {
      dispatch(addFavorite(camper));
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    setIsFavorite(favorites.some((fav) => fav._id === _id));
  }, [favorites, _id]);

  return (
    <div className={css.mainInfo}>
      <p>{name}</p>
      <div className={css.flexRight}>
        <p>€{price}.00</p>
        <button
          type="button"
          className={css.favoriteBtn}
          onClick={() => handleFavoriteClick()}
        >
          <Icon
            iconName="favorite"
            width="24"
            height="24"
            styles={isFavorite ? css.heartActive : css.heartNotActive}
          />
        </button>
      </div>
    </div>
  );
};

export default CamperDescription;
