import type { FC } from "react";
import "./Login.scss";
import InsuranceForm from "./components/Form";

const Login: FC = () => {
  return (
    <section className="login-section">
      <div className="login-section__container">
        <div className="login-section__image-section">
          <div className="login-section__image-wrapper">
            <img src="/src/assets/images/login-background.png" alt="family" />
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
  );
};

export default Login;
