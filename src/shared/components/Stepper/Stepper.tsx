import { type FC } from "react";
import "./Stepper.scss";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="stepper">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div className="stepper__item" key={index}>
            <div
              className={`stepper__circle ${
                isCompleted ? "completed" : isActive ? "active" : ""
              }`}
            >
              <span>{stepNumber}</span>
            </div>
            <span
              className={`stepper__label ${
                isActive ? "active" : isCompleted ? "completed" : ""
              }`}
            >
              {step}
            </span>

            {/* Línea separadora (menos en el último) */}
            {index < steps.length - 1 && <div className="stepper__line"></div>}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
