// src/components/layout/Header/Header.tsx
import React from "react";
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
              <svg
                className="header__logo"
                viewBox="0 0 120 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Rimac Seguros</title>
                <path
                  d="M8.5 4.5H15.5C18.5 4.5 21 7 21 10V18C21 21 18.5 23.5 15.5 23.5H8.5V4.5Z"
                  fill="#FF1744"
                />
                <path d="M31 4.5H38V23.5H31V4.5Z" fill="#FF1744" />
                <path
                  d="M48 4.5H55L65 14.5L75 4.5H82V23.5H75V12.5L65 22.5L55 12.5V23.5H48V4.5Z"
                  fill="#FF1744"
                />
                <path
                  d="M92 4.5H99L109 23.5H102L100 19.5H91L89 23.5H82L92 4.5ZM95.5 8.5L93 14.5H98L95.5 8.5Z"
                  fill="#FF1744"
                />
                <path
                  d="M119 11.5C119 7.5 116 4.5 112 4.5H105V23.5H112C116 23.5 119 20.5 119 16.5V11.5Z"
                  fill="#FF1744"
                />
              </svg>
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
              <svg
                className="header__phone-icon"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <title>Teléfono</title>
                <path
                  d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.98 10.98c-.217.068-.377.235-.423.43-.114.48-.345.911-.672 1.238a.678.678 0 0 1-.958 0l-5.575-5.575a.678.678 0 0 1 0-.958c.327-.327.758-.558 1.238-.672.195-.046.362-.206.43-.423l.549-1.805a.678.678 0 0 0-.122-.58L3.654 1.328z"
                  fillRule="evenodd"
                />
              </svg>
              <span className="header__phone-number">{phoneNumber}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
