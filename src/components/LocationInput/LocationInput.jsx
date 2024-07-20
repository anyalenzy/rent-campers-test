import { useId } from "react";
import css from "./LocationInput.module.css";
import { changeLocation } from "../../redux/camper/slice";
import { selectLocation } from "../../redux/camper/selectors";
import Icon from "../Icon/Icon";
import { useDispatch, useSelector } from "react-redux";

export const LocationInput = () => {
  const dispatch = useDispatch();
  const inputLocationId = useId();
  const location = useSelector(selectLocation);
  return (
    <div className={css.locationContainer}>
      <label className={css.label} htmlFor={inputLocationId}>
        Location
      </label>
      <div className={css.inputContainer}>
        <input
          className={css.input}
          type="text"
          value={location}
          id={inputLocationId}
          placeholder="Country, City"
          onChange={(e) => dispatch(changeLocation(e.target.value))}
        />
        <Icon
          iconName="location"
          width="18"
          height="20"
          styles={css.iconLocation}
        />
      </div>
    </div>
  );
};
