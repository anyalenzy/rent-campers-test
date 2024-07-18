import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/camper/slice";
import { selectFavorites } from "../../redux/camper/selectors";
import Icon from "../Icon/Icon";
import CamperDetails from "../CamperDetails/CamperDetails";
import css from "./CamperDescription.module.css";

const CamperDescription = ({ camper }) => {
  const { name, price, _id, rating, reviews, location, description } = camper;
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
    <div className={css.descriptionContainer}>
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
      <div className={css.secondInfo}>
        <div className={css.reviewContainer}>
          <Icon iconName="star" width="16" height="16" styles={css.starIcon} />
          <p className={css.rating}>
            {rating}(
            {reviews.length > 1
              ? `${reviews.length} Reviews`
              : `${reviews.length} Review`}
            )
          </p>
        </div>
        <div className={css.locationContainer}>
          <Icon
            iconName="location"
            width="16"
            height="16"
            styles={css.locationIcon}
          />
          <p className={css.location}>{location}</p>
        </div>
      </div>
      <p className={css.text}>{description}</p>
      <CamperDetails camper={camper} />
      <button
        className={css.showMoreBtn}
        // onClick={() => {
        //   setIsModalOpen(true);
        // }}
      >
        Show more
      </button>
    </div>
  );
};

export default CamperDescription;
