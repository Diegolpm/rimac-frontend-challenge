import type { FC } from "react";
import InsuranceForm from "./components/Form/Form";
import LoginBackground from "/src/assets/images/login-background.png";
import "./Login.scss";

const Login: FC = () => {
  return (
    <>
      <section className="login-section">
        <div className="login-section__container">
          <div className="login-section__image-section">
            <div className="login-section__image-wrapper">
              <img src={LoginBackground} alt="family" />
            </div>
          </div>
          <div className="login-section__form-section">
            <div className="login-section__form-wrapper">
              <InsuranceForm loading={false} />
            </div>
          </div>
          {/* <div className="login-section__background" aria-hidden="true"></div> */}
        </div>
      </section>
    </>
  );
};

export default Login;
