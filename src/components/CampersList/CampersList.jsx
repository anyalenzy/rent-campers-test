import { useSelector } from "react-redux";
import { useState } from "react";
import {
  selectFilteredCampers,
  selectIsError,
  selectIsLoading,
} from "../../redux/camper/selectors";
import CamperListItem from "../CamperListItem/CamperListItem";
import css from "./CampersList.module.css";
import Loader from "../Loader/Loader";
import Icon from "../Icon/Icon";

const CampersList = () => {
  const campers = useSelector(selectFilteredCampers);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  const [maxCampers, setMaxCampers] = useState(4);

  const handleLoadMore = () => {
    setMaxCampers((setMaxCampers) => setMaxCampers + 4);
  };

  const visibleCampers = campers.slice(0, maxCampers);

  return (
    <div>
      {loading && <Loader />}
      <ul className={css.list}>
        {visibleCampers.map((camper) => (
          <CamperListItem camper={camper} key={camper._id} />
        ))}
      </ul>
      {visibleCampers.length === 0 ? (
        <div className={css.empty}>
          <p>
            Unfortunately, there are no campers that meet your requirements...
          </p>
          <Icon iconName="sad" width="20" height="20" styles={css.iconSad} />
        </div>
      ) : null}

      {maxCampers < campers.length && (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CampersList;
