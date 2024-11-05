import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "" },
  { icons: <FaLinkedin />, path: "" },
  { icons: <FaWhatsapp />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((items, index) => {
        return (
          <Link key={index} href={items.path} className={iconStyles}>
            {items.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
