import type { FC } from "react";
import type { Plans } from "../../../types/plans";
import Badge from "../../../shared/components/Badge/Badge";

interface CardPlanProps {
  plan: Plans;
  index: number;
  handlePlanSelection: (plan: Plans) => void;
}

const CardPlan: FC<CardPlanProps> = ({ plan, index, handlePlanSelection }) => {
  return (
    <div className="plan-information__card" key={index}>
      {index === 1 ? <Badge text="Plan recomendado" /> : null}
      <div className="plan-information__card-name">
        <h2 className="plan-information__title">{plan.name}</h2>
        <img src={plan.src} alt={plan.name} width={56} height={56} />
      </div>
      <p className="plan-information__subtitle">Costo de plan</p>
      <h3 className="plan-information__price">${plan.price} al mes</h3>

      <div className="plan-information__line"></div>
      <ul className="plan-information__list">
        {plan.description.map((description, index) => (
          <li key={index} className="plan-information__item">
            {description}
          </li>
        ))}
      </ul>
      <button
        className="plan-information__button"
        onClick={() => handlePlanSelection(plan)}
      >
        <span className="plan-information__button-text">Seleccionar Plan</span>
      </button>
    </div>
  );
};

export default CardPlan;
