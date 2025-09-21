import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { previousRoute } from "../../../app-globals";
import backButtonIcon from "../../../assets/icons/Backbutton.svg";
import "./BackButton.scss";

const BackButton: FC = () => {
  const navigate = useNavigate();

  const onBack = (): void => {
    navigate(previousRoute);
  };
  return (
    <button className="back" onClick={onBack}>
      <img src={backButtonIcon} alt="Volver" width={20} height={20} />
      Volver
    </button>
  );
};

export default BackButton;
