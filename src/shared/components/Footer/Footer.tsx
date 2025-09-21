import type { FC } from "react";
import LogoFooterIcon from "../../../assets/icons/LogoFooterIcon.svg";
import "./Footer.scss";

const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={LogoFooterIcon} alt="logo" />
        </div>
        <div className="footer__links">
          <p>© 2023 RIMAC Seguros y Reaseguros.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
