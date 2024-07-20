import { ColorRing } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loaderWrapper}>
      <ColorRing
        visible={true}
        height="200"
        width="200"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        className={css.loaderWrapper}
        wrapperClass="color-ring-wrapper"
        colors={["#FFC531", "#E44848", "#f8b26a", "#475467", "#101828"]}
      />
    </div>
  );
}
