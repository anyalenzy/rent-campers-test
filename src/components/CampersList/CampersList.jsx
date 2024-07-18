import { useSelector } from "react-redux";
import { useState } from "react";
import {
  selectCampers,
  selectIsError,
  selectIsLoading,
} from "../../redux/camper/selectors";
import CamperListItem from "../CamperListItem/CamperListItem";
import css from "./CampersList.module.css";
import Loader from "../Loader/Loader";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  const [maxCampers, setMaxCampers] = useState(4);

  const handleLoadMore = () => {
    setMaxCampers((setMaxCampers) => setMaxCampers + 4);
  };

  const visibleCampers = campers.slice(0, maxCampers);

  return (
    <>
      {loading && <Loader />}
      <div>
        <ul className={css.list}>
          {visibleCampers.map((camper) => (
            <CamperListItem camper={camper} key={camper._id} />
          ))}
        </ul>
        {maxCampers < campers.length && (
          <button onClick={handleLoadMore} className={css.loadMoreBtn}>
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default CampersList;
