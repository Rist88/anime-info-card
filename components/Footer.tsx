import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__list-item">
          <a href="https://twitter.com/satorugojo_">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </li>
        <li className="footer__list-item">
          <a href="https://www.facebook.com/satorugojoo/">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
        </li>
        <li className="footer__list-item">
          <a href="https://www.instagram.com/gojousatoru/">
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
        </li>
        <li className="footer__list-item">
          <a href="https://github.com/TNO-TheMemer/MiwaKasumi">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
