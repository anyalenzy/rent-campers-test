import CamperDescription from "../CamperDescription/CamperDescription";
import css from "./CamperListItem.module.css";

const CamperListItem = ({ camper }) => {
  return (
    <li className={css.camperListContainer}>
      <div className={css.imgContainer}>
        <img
          className={css.img}
          src={camper.gallery[0]}
          alt={camper.name}
          width={290}
          height={310}
        />
      </div>
      <CamperDescription camper={camper} />
    </li>
  );
};

export default CamperListItem;
