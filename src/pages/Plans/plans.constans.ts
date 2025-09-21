import AddUserIcon from "../../assets/icons/AddUserIcon.svg";
import ProtectionIcon from "../../assets/icons/ProtectionIcon.svg";

export type CardInformation = {
  title: string;
  description: string;
  src: string;
};

export const cardInformation: CardInformation[] = [
  {
    title: "Para mi",
    description:
      "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
    src: ProtectionIcon,
  },
  {
    title: "Para alguien más",
    description:
      "Realiza una cotización para uno de tus familiares o cualquier persona.",
    src: AddUserIcon,
  },
];
