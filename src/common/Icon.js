import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faMoon,
  faSun,
  faBars,
  faTimes,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGithubAlt,
  faGithubSquare,
  faLinkedin,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faGithub,
  faGithubAlt,
  faGithubSquare,
  faLinkedin,
  faLinkedinIn,
  faMoon,
  faSun,
  faBars,
  faTimes,
  faWhatsapp,
  faExternalLinkAlt
);

const Icon = (props) => <FontAwesomeIcon {...props} />;

export default Icon;
