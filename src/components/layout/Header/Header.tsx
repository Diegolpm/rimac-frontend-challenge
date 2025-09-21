// src/components/layout/Header/Header.tsx
import React from "react";
import logoIcon from "../../../assets/icons/logoRimac.svg";
import telephoneIcon from "../../../assets/icons/GlTelephoneSolid.svg";
import "./Header.scss";

interface HeaderProps {
  companyText?: string;
  phoneNumber?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  companyText = "¡Compra por este medio!",
  phoneNumber = "(01) 411 6001",
  className = "",
}) => {
  const handlePhoneClick = (phone: string) => {
    const cleanPhone = phone.replace(/[\s()]/g, "");
    window.location.href = `tel:+51${cleanPhone}`;
  };

  return (
    <header className={`header ${className}`} role="banner">
      <div className="container">
        <div className="header__content">
          {/* Logo Section */}
          <div className="header__logo-section">
            <a
              href="/"
              className="header__logo-link"
              aria-label="Ir al inicio de Rimac Seguros"
            >
              <img src={logoIcon} alt="logo" />
            </a>
          </div>

          {/* Contact Section */}
          <div className="header__contact-section">
            <span
              className="header__company-text"
              aria-label="Mensaje promocional"
            >
              {companyText}
            </span>

            <button
              type="button"
              className="header__phone-button"
              onClick={() => handlePhoneClick(phoneNumber)}
              aria-label={`Llamar al ${phoneNumber}`}
            >
              <img src={telephoneIcon} alt="phone" />
              <span className="header__phone-number">{phoneNumber}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
