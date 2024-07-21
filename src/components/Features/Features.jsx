import BookForm from "../BookForm/BookForm";
import FeaturesDetails from "../FeaturesDetails/FeaturesDetails";
import css from "./Features.module.css";
const Features = ({ camper }) => {
  return (
    <div className={css.container}>
      <FeaturesDetails camper={camper} />
      <BookForm />
    </div>
  );
};

export default Features;
