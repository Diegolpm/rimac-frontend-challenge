import { useEffect, useState } from "react";
import {
  useGlobalAppDispatch,
  useGlobalAppState,
} from "../../store/app-context";
import { rimacAPI } from "../../proxy/rimac";
import { AppActions } from "../../domain/app-actions.enum";
import type { Plans } from "../../domain/plans";
import { useNavigate } from "react-router-dom";
import homeIcon from "../../assets/icons/IcHomeLight.svg";
import hospitalIcon from "../../assets/icons/IcHospitalLight.svg";
import { rimacRouteModules } from "../../routes";
import CardPlan from "./components/CardPlan";
import CardRadioButton from "./components/CardRadioButton";
import "./Plans.scss";
import { calculateAge } from "../../shared/utils/calculate-age";
import { cardInformation } from "./plans.constans";
import BackButton from "../../shared/components/BackButton/BackButton";

const Plans: React.FC = () => {
  const dispatchApp = useGlobalAppDispatch();
  const { user, plans } = useGlobalAppState();
  const [showPlans, setShowPlans] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getPlans = async () => {
      try {
        const response = await rimacAPI.getPlans();
        dispatchApp({
          type: AppActions.SetPlans,
          payload: response,
        });
      } catch (error) {
        console.error("Error loading plans:", error);
      }
    };

    getPlans();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  const userAge = calculateAge(user?.birthDay as string);
  const availablePlans = plans.filter(({ age }) => userAge <= age);

  const handlePlanSelection = (plan: Plans): void => {
    dispatchApp({
      type: AppActions.SetPlanSelected,
      payload: plan,
    });
    navigate(rimacRouteModules.Resume);
  };

  const handleUsersSelection = (): void => {
    setShowPlans(true);
  };

  const availablePlansWithIcons = availablePlans.map((plan) => ({
    ...plan,
    src: plan.price === 99 ? hospitalIcon : homeIcon,
  }));

  return (
    <>
      <section className="plan-section">
        <div className="plan-section__container">
          <BackButton />
          <h2 className="plan-section__title">
            {user?.name} ¿Para quién deseas cotizar?
          </h2>
          <p className="plan-section__description">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
          <div className="plan-section__card-container">
            {cardInformation.map((card, index) => (
              <CardRadioButton
                key={index}
                card={card}
                index={index}
                handleUsersSelection={handleUsersSelection}
              />
            ))}
          </div>

          <div className="plan-information">
            {showPlans &&
              availablePlansWithIcons.map((plan, index) => (
                <CardPlan
                  plan={plan}
                  index={index}
                  handlePlanSelection={handlePlanSelection}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Plans;
