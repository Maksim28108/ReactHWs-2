import Button from "../Button/Button";
import Trustpilot from "../../assets/HeroPics/trustpilot.png";
import Heroimage from "../../assets/HeroPics/heroimage.png";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.HeroDiv}>
      <div className={styles.HeroLeft}>
        <h1 className={styles.HeroTitle}>
          Beautiful food & takeaway,{" "}
          <span className={styles.HeroTitleAccent}>delivered</span> to your
          door.
        </h1>

        <p className={styles.HeroText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500.
        </p>

        <Button children={"Place an Order"} />

        <div className={styles.TrustpilotDiv}>
          <img src={Trustpilot} alt="" />
          <p>
            <span className={styles.TrustpilotTextAccent}>4.8 out of 5</span>{" "}
            based on 2000+ reviews
          </p>
        </div>
      </div>

      <div className={styles.HeroImageDiv}>
        <img src={Heroimage} alt="" className={styles.HeroImage} />
      </div>
    </div>
  );
}
