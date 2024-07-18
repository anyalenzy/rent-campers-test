import css from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={css.aboutUsContainer}>
      <h1 className={css.aboutUsTitle}>Camper Rent in Ukraine</h1>
      <p className={css.description}>
        <p>
          Welcome to Camper Rent Ukraine! We offer the best campers for rent
          throughout Ukraine.
        </p>
        <h2>Our Services</h2>
        <ul className={css.list}>
          <li>Rent campers of various configurations</li>
          <li>Flexible rental conditions</li>
          <li>Technical support 24/7</li>
          <li>Additional equipment and accessories</li>
        </ul>
        <h2>Why Choose Us?</h2>
        <p>
          We guarantee the high quality of our services and individuality
          approach to each client. Our campers pass regularly technical
          inspection and equipped with everything necessary for a comfortable
          stay travel.
        </p>
      </p>
    </div>
  );
};

export default AboutUs;
