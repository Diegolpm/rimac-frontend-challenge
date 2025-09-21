import type { FC } from "react";
import { useForm } from "react-hook-form";
import type { CardInformation } from "../plans.constans";

interface CardRadioButtonProps {
  card: CardInformation;
  index: number;
  handleUsersSelection: () => void;
}

const CardRadioButton: FC<CardRadioButtonProps> = ({
  card,
  index,
  handleUsersSelection,
}) => {
  const { register } = useForm();

  return (
    <label key={index} className="radio-wrapper">
      <input
        type="radio"
        className="radio-wrapper__input"
        {...register("myRadioGroup")}
        onChange={handleUsersSelection}
      />
      <img src={card.src} alt={card.title} width={48} height={48} />
      <h3 className="radio-wrapper__title">{card.title}</h3>
      <p className="radio-wrapper__description">{card.description}</p>
    </label>
  );
};

export default CardRadioButton;
