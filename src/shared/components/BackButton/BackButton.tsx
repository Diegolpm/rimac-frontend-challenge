import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { previousRoute } from "../../../app-globals";
import BackbuttonIcon from "../../../assets/icons/BackbuttonIcon.svg";
import "./BackButton.scss";

const BackButton: FC = () => {
  const navigate = useNavigate();

  const onBack = (): void => {
    navigate(previousRoute);
  };
  return (
    <button className="back" onClick={onBack}>
      <img src={BackbuttonIcon} alt="Volver" width={20} height={20} />
      Volver
    </button>
  );
};

export default BackButton;
