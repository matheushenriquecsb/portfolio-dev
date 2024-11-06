import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "https://github.com/matheushenriquecsb" },
  {
    icons: <FaLinkedin />,
    path: "https://www.linkedin.com/in/matheus-henrique-batista-120821/",
  },
  {
    icons: <FaWhatsapp />,
    path: "https://api.whatsapp.com/send?phone=5571991910098",
  },
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
