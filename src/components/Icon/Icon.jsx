import sprite from "../../../public/sprite.svg";

const Icon = ({ width, height, iconName, styles, style }) => {
  return (
    <svg width={width} height={height} className={styles} style={style}>
      <use href={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

export default Icon;
