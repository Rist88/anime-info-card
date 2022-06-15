// import Image from "next/image";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Info() {
  return (
    <section className="info">
      <h2 className="info__name">Gojo Satoru</h2>
      <h4 className="info__subtitle">Senior Teacher</h4>
      <small className="info__site">
        <a href="https://jujutsu-kaisen.fandom.com/wiki/Satoru_Gojo">
          strongest-jujutsu-sorcerer.jp
        </a>
      </small>
      <img
        src="https://i.pinimg.com/564x/8e/de/53/8ede538fcf75a0a1bd812810edb50cb7.jpg"
        // layout="fill"
        alt="Photo of a attractive, blindfolded man. His smile radiates peace - it fills you with determination and makes you believe in the better future."
        className="info__profile-pic"
      />
      <div className="info__btn">
        <a href="mailto:jujutsu.high.tokyo.edu" className="info__btn-email">
          <FontAwesomeIcon icon={faEnvelope} style={{ maxWidth: "25px" }} />
          {/* <i className="fas fa-envelope"></i> */}
          <span>Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/gojo-satoru-837343217/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADawcOsBkeI6xYWDBTRfMnKW89-J4RgmSlA"
          className="info__btn-linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} style={{ maxWidth: "25px" }} />
          {/* <i className="fab fa-linkedin"></i> */}
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
