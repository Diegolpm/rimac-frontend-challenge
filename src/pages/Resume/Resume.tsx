import FamilyIcon from "../../assets/icons/FamilyIcon.svg";
import { useGlobalAppState } from "../../store/app-context";
import BackButton from "../../shared/components/BackButton/BackButton";
import "./Resume.scss";

const Resume: React.FC = () => {
  const { user, userData, planSelected } = useGlobalAppState();

  return (
    <section className="resume">
      <div className="resume__container">
        <BackButton />

        <h2 className="resume__title">Resumen del seguro</h2>

        <div className="resume__card">
          <p className="resume__card-title">Precios calculados para:</p>

          <div className="resume__card-header">
            <img src={FamilyIcon} alt="Usuario" width={24} height={24} />
            <h3 className="resume__card-name">
              {user?.name} {user?.lastName}
            </h3>
          </div>

          <div className="resume__card-section">
            <p className="resume__card-label">Responsable de pago</p>
            <p className="resume__card-data">DNI: {userData?.documentNumber}</p>
            <p className="resume__card-data">
              Celular: {userData?.phoneNumber}
            </p>
          </div>

          <div className="resume__card-section">
            <p className="resume__card-label">Plan elegido</p>
            <p className="resume__card-data">{planSelected?.name}</p>
            <p className="resume__card-data">
              Costo del Plan: ${planSelected?.price} al mes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
